import { useEffect, useState } from 'react';

import OffersList from '../../components/offers-list';
import Map from '../../components/map';
import CitiesList from '../../components/cities-list';

import { CITIES } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity, fillOffers } from '../../store/action';

import mockoffers from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fillOffers(mockoffers));
  }, [dispatch]);

  const currentCity = useAppSelector((state) => state.city);

  const offersData = useAppSelector((state) =>
    state.offers.filter(
      (offer) => offer.city.name === state.city
    )
  );

  const [activeOfferId, setActiveOfferId] = useState('');

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  const handleCardHover = (id: string) => {
    if (id !== activeOfferId) {
      setActiveOfferId(id);
    }
  };

  const handleCardLeave = () => {
    setActiveOfferId('');
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={ROUTES.mainPage}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={ROUTES.favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to={ROUTES.login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">
          Cities
        </h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              currentCity={currentCity}
              onCityChange={handleCityChange}
            />
          </section>
        </div>

        <div className="cities">
          <div className="cities__places-container container">

            <section className="cities__places places">
              <h2 className="visually-hidden">
                Places
              </h2>

              <b className="places__found">
                {offersData.length} places to stay in {currentCity}
              </b>

              {/* sorting */}

              <OffersList
                offersData={offersData}
                onCardHover={handleCardHover}
                onCardLeave={handleCardLeave}
              />
            </section>

            <div className="cities__right-section">
              <Map
                offersData={offersData}
                activeOfferId={activeOfferId}
              />
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;

