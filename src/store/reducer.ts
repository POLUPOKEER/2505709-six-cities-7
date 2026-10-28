import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { changeCity, loadOfferDetails, loadOffers, requireAuthorization, setError, setOfferDetailsDataLoading, setOffersDataLoading, setUserEmail } from './action';
import { TOffers } from '../types/offers';
import { TOfferDetails } from '../types/offerDetails';

type TState = {
  city: string;
  offers: TOffers;
  error: string | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  offerDetails: TOfferDetails | null;
  isOfferDetailsDataLoading: boolean;
}

const initialState: TState = {
  city: DEFAULT_CITY,
  offers: [],
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  offerDetails: null,
  isOfferDetailsDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffersDataLoading, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = action.payload;
    })
    .addCase(setOfferDetailsDataLoading, (state, action) => {
      state.isOfferDetailsDataLoading = action.payload;
    });
});

