import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_CITY, NameSpace, RequestStatus } from '../../const';
import { TOffers } from '../../types/offers';
import { fetchOffersAction } from '../api-actions';


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
      .addCase(fetchOffersAction.pending, (state) => {
        state.offersStatus = 'loading';
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offersStatus = 'success';
        state.offers = action.payload;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offersStatus = 'error';
        state.offers = [];
      });
  },
});

export const changeCity = OffersSlice.actions.changeCity;

