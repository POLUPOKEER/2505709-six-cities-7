import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TOffers } from '../../types/offers';
import { changeOfferFavoriteStatus, fetchFavoriteOffers, logoutAction } from '../api-actions';

export type TFavoriteOffersSlice = {
  favoriteOffers: TOffers;
  favoriteOffersStatus: RequestStatus;
};

const initialState: TFavoriteOffersSlice = {
  favoriteOffers: [],
  favoriteOffersStatus: 'idle'
};

export const FavoriteOffersSlice = createSlice({
  name: NameSpace.FavoriteOffersData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.favoriteOffersStatus = 'loading';
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffersStatus = 'success';
        state.favoriteOffers = action.payload;
      })
      .addCase(fetchFavoriteOffers.rejected, (state) => {
        state.favoriteOffersStatus = 'error';
        state.favoriteOffers = [];
      })
      .addCase(changeOfferFavoriteStatus.pending, (state) => {
        state.favoriteOffersStatus = 'loading';
      })
      .addCase(changeOfferFavoriteStatus.fulfilled, (state) => {
        state.favoriteOffersStatus = 'success';
      })
      .addCase(changeOfferFavoriteStatus.rejected, (state) => {
        state.favoriteOffersStatus = 'error';
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.favoriteOffersStatus = 'idle';
        state.favoriteOffers = [];
      });
  }
});

