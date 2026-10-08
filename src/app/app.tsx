import Favorites from '../pages/favorites/favorites';
import Login from '../pages/login/login';
import MainPage from '../pages/main-page/main-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Offer from '../pages/offer/offer';
import NotFound from '../pages/not-found/not-found';
import { TOffers } from '../types/offers';
import PrivateRoute from '../components/privateRoute';
import { ROUTES } from '../routes';

type AppProps = {
  offersData: TOffers;
  isAuth: boolean;
  offersFavoritesData: TOffers;
}

function App({ offersData, isAuth, offersFavoritesData }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.mainPage} element={<MainPage offersData={offersData} />} />
        <Route path={ROUTES.login} element={<Login />} />
        <Route path={ROUTES.favorites} element={
          <PrivateRoute isAuth={isAuth}>
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
