import { useState } from 'react';

import OffersList from '../../components/offers-list';
import Map from '../../components/map';
import CitiesList from '../../components/cities-list';

import { CITIES, SortType } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';

import PlacesSortingForm from '../../components/places-sorting-form';
import Header from '../../components/header';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();


  const currentCity = useAppSelector((state) => state.city);

  const offersData = useAppSelector((state) =>
    state.offers.filter(
      (offer) => offer.city.name === state.city
    )
  );
  const sortedOffers = [...offersData];

  const [sortType, setSortType] = useState(SortType.Popular);

  switch (sortType) {
    case SortType.PriceLowToHight:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;

    case SortType.PriceHighToLow:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;

    case SortType.TopRated:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;

    case SortType.Popular:
    default:
      break;
  }


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
      <Header />
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

              <PlacesSortingForm
                currentSort={sortType}
                onSortChange={setSortType}
              />

              <OffersList
                offersData={sortedOffers}
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

