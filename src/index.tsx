import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import mockoffersFavorites from './mocks/offers-favorites';
import { store } from './store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const isAuth = true;

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isAuth={isAuth} offersFavoritesData={mockoffersFavorites} />
    </Provider>
  </React.StrictMode>
);
