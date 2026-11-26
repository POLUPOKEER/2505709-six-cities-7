import { createSelector } from '@reduxjs/toolkit';
import { TState } from '..';
import { NameSpace } from '../../const';
import { TFavoriteOffersSlice } from './favorite-offers-slice';

export const getFavoriteOffers = (state: TState) =>
  state[NameSpace.FavoriteOffersData].favoriteOffers;

export const getFavoriteOffersStatus = createSelector(
  (state: TState) => state[NameSpace.FavoriteOffersData],
  (state: TFavoriteOffersSlice) => state.favoriteOffersStatus
);
