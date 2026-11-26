import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../components/routes/privateRoute';
import { ROUTES } from '../routes';
import { useAppSelector } from '../store/store-hooks';
import LoadingScreen from '../components/spinner/spinner';
import { AuthorizationStatus } from '../const';
import { getOffersStatus } from '../store/offers/offers-selectors';
import { getAuthorizationStatus, getCheckAuthStatus } from '../store/user-process/user-process-selectors';
import PublicRoute from '../components/routes/publicRoute';
import useFetchOffers from '../hooks/use-fetch-offers/useFetchOffers';
import useCheckAuth from '../hooks/use-check-auth/useCheckAuth';


function App() {

  useFetchOffers();
  useCheckAuth();

  const OffersStatus = useAppSelector(getOffersStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const checkAuthStatus = useAppSelector(getCheckAuthStatus);
  if ((authorizationStatus === AuthorizationStatus.Unknown || OffersStatus === 'loading') && checkAuthStatus !== 'error') {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.mainPage} element={<MainPage />} />
        <Route path={ROUTES.login} element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
        />
        <Route path={ROUTES.favorites} element={
          <PrivateRoute>
            <Favorites />
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
