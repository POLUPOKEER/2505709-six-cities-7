import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, RequestStatus } from '../../const';
import { TOffers } from '../../types/offers';
import { fetchOffers, logoutAction } from '../api-actions';


export type TOffersSlice = {
  city: string;
  offers: TOffers;
  offersStatus: RequestStatus;
};
const initialState: TOffersSlice = {
  city: DEFAULT_CITY,
  offers: [],
  offersStatus: 'idle'
};


export const OffersSlice = createSlice({
  name: NameSpace.OffersData,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offersStatus = 'loading';
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offersStatus = 'success';
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offersStatus = 'error';
        state.offers = [];
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.offersStatus = 'idle';
        state.offers = [];
      });
  },
});

export const changeCity = OffersSlice.actions.changeCity;

