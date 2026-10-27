import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';
import { AuthorizationStatus } from '../const';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const setError = createAction<string | null>('app/setError');

export const setOffersDataLoading = createAction<boolean>('data/setOffersDataLoading');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setUserEmail = createAction<string>('user/setUserEmail');

