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

type AppProps = {
  offersFavoritesData: TOffers;
}

function App({ offersFavoritesData }: AppProps) {

  const isOffersDataLoading = useAppSelector((state) => state.isOffersDataLoading);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
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
