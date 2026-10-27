import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';

export const changeCity = createAction<string>('data/changeCity');

export const loadOffers = createAction<TOffers>('data/loadOffers');

export const setError = createAction<string | null>('app/setError');

export const setOffersDataLoading = createAction<boolean>('data/setOffersDataLoading');
