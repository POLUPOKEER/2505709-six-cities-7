import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { changeCity, loadOffers, requireAuthorization, setError, setOffersDataLoading, setUserEmail } from './action';
import { TOffers } from '../types/offers';
import { TOfferDetails } from '../types/offerDetails';
import { RequestStatus } from '../const';
import { fetchComments, fetchOfferDetails } from './api-actions';
import { TComment } from '../types/comments';

type TState = {
  city: string;
  offers: TOffers;
  error: string | null;
  isOffersDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;

  offerDetails: TOfferDetails | null;
  offerDetailsStatus: RequestStatus;
  offerDetailsId: string | null;

  comments: TComment[];
  commentsStatus: RequestStatus;
}

const initialState: TState = {
  city: DEFAULT_CITY,
  offers: [],
  error: null,
  isOffersDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,

  offerDetails: null,
  offerDetailsStatus: 'idle',
  offerDetailsId: null,

  comments: [],
  commentsStatus: 'idle',
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
    })
    .addCase(fetchComments.pending, (state) => {
      state.commentsStatus = 'loading';
      state.comments = [];
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.commentsStatus = 'success';
      state.comments = action.payload;
    })
    .addCase(fetchComments.rejected, (state) => {
      state.commentsStatus = 'error';
      state.comments = [];
    });
});

