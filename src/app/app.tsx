import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found/not-found';
import { TOffers } from '../types/offers';
import PrivateRoute from '../components/privateRoute';
import { ROUTES } from '../routes';
import { useAppSelector } from '../hooks';
import LoadingScreen from '../components/spinner/spinner';
import { AuthorizationStatus } from '../const';
import { getOffersStatus } from '../store/offers/offers-selectors';
import { getAuthorizationStatus } from '../store/user-process/user-process-selectors';

type AppProps = {
  offersFavoritesData: TOffers;
}

function App({ offersFavoritesData }: AppProps) {

  const OffersStatus = useAppSelector(getOffersStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown || OffersStatus === 'loading') {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.mainPage} element={<MainPage />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.favorites} element={
          <PrivateRoute>
            <Favorites offersData={offersFavoritesData} />
          </PrivateRoute>
        }
        />
        <Route path={ROUTES.offer} element={<Offer />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
