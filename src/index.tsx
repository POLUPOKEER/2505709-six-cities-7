import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';
import mockoffers from './mocks/offers';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const offersCnt = 312;

root.render(
  <React.StrictMode>
    <App offersCount={offersCnt} offersData={mockoffers} />
  </React.StrictMode>
);
