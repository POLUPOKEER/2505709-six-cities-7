import { createAction } from '@reduxjs/toolkit';
import { TOffers } from '../types/offers';

export const changeCity = createAction<string>('data/changeCity');

export const fillOffers = createAction<TOffers>('data/fillOffers');
