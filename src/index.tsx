import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import mockoffersFavorites from './mocks/offers-favorites';
import { store } from './store';
import { Provider } from 'react-redux';
import ErrorMessage from './components/error-message/error-message';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';


store.dispatch(fetchOffersAction());
// store.dispatch(loginAction({ login: 'asdfg@mail.ru', password: '2asdfgzxcde' }));
store.dispatch(checkAuthAction());
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App offersFavoritesData={mockoffersFavorites} />
    </Provider>
  </React.StrictMode>
);
