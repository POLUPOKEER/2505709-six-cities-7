import { createSlice } from '@reduxjs/toolkit';
import { TOffers } from '../../types/offers';
import { NameSpace, RequestStatus } from '../../const';
import { fetchNearbyOffers } from '../api-actions';

export type TNearByOffersSlice = {
  nearbyOffers: TOffers;
  nearbyOffersStatus: RequestStatus;
};

const initialState: TNearByOffersSlice = {
  nearbyOffers: [],
  nearbyOffersStatus: 'idle',
};

export const NearByOffersSlice = createSlice({
  name: NameSpace.NearByOffersData,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearbyOffers.pending, (state) => {
        state.nearbyOffersStatus = 'loading';
        state.nearbyOffers = [];
      })
      .addCase(fetchNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffersStatus = 'success';
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffers.rejected, (state) => {
        state.nearbyOffersStatus = 'error';
        state.nearbyOffers = [];
      });
  }
});

