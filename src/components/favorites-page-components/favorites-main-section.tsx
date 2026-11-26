import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/store-hooks';
import { getFavoriteOffers } from '../../store/favorite-offers/favorite-offers-selectors';
import OfferCard from '../offer-card';

export default function FavoritesMainSection() {

  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const cities = [...new Set(
    favoriteOffers.map((offer) => offer.city.name)
  )];
  return (
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
                  {favoriteOffers
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
  );
}
