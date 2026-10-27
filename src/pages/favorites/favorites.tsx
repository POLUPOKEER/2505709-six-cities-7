import { TOffers } from '../../types/offers';
import OfferCard from '../../components/offer-card';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Header from '../../components/header';

type favoritesProps = {
  offersData: TOffers;
}

function Favorites({ offersData }: favoritesProps) {

  const cities = [...new Set(
    offersData.map((offer) => offer.city.name)
  )];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <Link className="locations__item-link" to="#">
                        <span>{city}</span>
                      </Link>
                    </div>
                  </div>

                  <div className="favorites__places">
                    {offersData
                      .filter((offer) => offer.city.name === city)
                      .map((offer) => (
                        <OfferCard key={offer.id} offerData={offer} variant='favorites' />
                      ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main >
      <footer className="footer container">
        <Link className="footer__logo-link" to={ROUTES.mainPage}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div >
  );
}

export default Favorites;
