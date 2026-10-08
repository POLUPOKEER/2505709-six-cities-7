import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import mockoffers from './mocks/offers';
import mockoffersFavorites from './mocks/offers-favorites';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuth = true;

root.render(
  <React.StrictMode>
    <App offersData={mockoffers} isAuth={isAuth} offersFavoritesData={mockoffersFavorites} />
  </React.StrictMode>
);
