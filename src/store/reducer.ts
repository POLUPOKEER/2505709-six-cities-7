import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_CITY } from '../const';
import { changeCity, fillOffers } from './action';
import { TOffers } from '../types/offers';

type TState = {
  city: string;
  offers: TOffers;
}

const initialState: TState = {
  city: DEFAULT_CITY,
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillOffers, (state, action) => {
      state.offers = action.payload;
    });
});

