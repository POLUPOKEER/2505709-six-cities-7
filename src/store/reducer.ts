import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { changeCity, loadOffers, setError, setOffersDataLoading } from './action';
import { TOffers } from '../types/offers';

type TState = {
  city: string;
  offers: TOffers;
  error: string | null;
  isOffersDataLoading: boolean;
}

const initialState: TState = {
  city: DEFAULT_CITY,
  offers: [],
  error: null,
  isOffersDataLoading: false
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
    });
});

