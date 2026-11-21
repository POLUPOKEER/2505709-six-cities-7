import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { fetchOfferDetails } from '../api-actions';
import { TOfferDetails } from '../../types/offerDetails';


export type TOfferDetailsSlice = {
  offerDetails: TOfferDetails | null;
  offerDetailsStatus: RequestStatus;
  offerDetailsId: string | null;
}
const initialState: TOfferDetailsSlice = {
  offerDetails: null,
  offerDetailsStatus: 'idle',
  offerDetailsId: null,
};

export const OfferDetailsSlice = createSlice({
  name: NameSpace.OfferDetailsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOfferDetails.pending, (state, action) => {
        state.offerDetailsStatus = 'loading';
        state.offerDetailsId = action.meta.arg;
        state.offerDetails = null;
      })
      .addCase(fetchOfferDetails.fulfilled, (state, action) => {
        state.offerDetailsStatus = 'success';
        state.offerDetails = action.payload;
      })
      .addCase(fetchOfferDetails.rejected, (state) => {
        state.offerDetailsStatus = 'error';
        state.offerDetails = null;
      });
  }
});
