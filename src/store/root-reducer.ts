import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { AppErrorSlice } from './app-error/app-error-slice';
import { CommentsSlice } from './comments/comments-slice';
import { NearByOffersSlice } from './near-by-offers/near-by-offers-slice';
import { OffersSlice } from './offers/offers-slice';
import { OfferDetailsSlice } from './offer-details/offer-details-slice';
import { UserProcessSlice } from './user-process/user-process-slice';
import { FavoriteOffersSlice } from './favorite-offers/favorite-offers-slice';

export const rootReducer = combineReducers({
  [NameSpace.AppErrorData]: AppErrorSlice.reducer,
  [NameSpace.CommentsData]: CommentsSlice.reducer,
  [NameSpace.NearByOffersData]: NearByOffersSlice.reducer,
  [NameSpace.OfferDetailsData]: OfferDetailsSlice.reducer,
  [NameSpace.OffersData]: OffersSlice.reducer,
  [NameSpace.UserData]: UserProcessSlice.reducer,
  [NameSpace.FavoriteOffersData]: FavoriteOffersSlice.reducer
});
