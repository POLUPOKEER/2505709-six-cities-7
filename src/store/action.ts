import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';
import { AuthorizationStatus } from '../const';
import { TOfferDetails } from '../types/offerDetails';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const setError = createAction<string | null>('app/setError');

export const setOffersDataLoading = createAction<boolean>('data/setOffersDataLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserEmail = createAction<string>('user/setUserEmail');

export const loadOfferDetails = createAction<TOfferDetails>('data/loadOfferDetails');

export const setOfferDetailsDataLoading = createAction<boolean>('data/setOfferDetailsDataLoading');


