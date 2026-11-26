
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Header from '../../components/header';
import { useAppSelector } from '../../store/store-hooks';
import { getFavoriteOffers, getFavoriteOffersStatus } from '../../store/favorite-offers/favorite-offers-selectors';
import Spinner from '../../components/spinner/spinner';
import FavoritesEmptySection from '../../components/favorites-page-components/favorites-empty-section';
import FavoritesMainSection from '../../components/favorites-page-components/favorites-main-section';


function Favorites() {
  const favoriteOffersStatus = useAppSelector(getFavoriteOffersStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);


  if (favoriteOffersStatus === 'loading') {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header />
      {favoriteOffersStatus === 'error' || favoriteOffers.length === 0 ?
        <FavoritesEmptySection />
        :
        <FavoritesMainSection />}
      <footer className="footer container">
        <Link className="footer__logo-link" to={ROUTES.mainPage}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </Link>
      </footer>
    </div >
  );
}

export default Favorites;
