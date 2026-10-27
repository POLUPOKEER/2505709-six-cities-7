import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, store, TState } from '.';
import { AxiosInstance } from 'axios';
import { TOffers } from '../types/offers';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, setError, setOffersDataLoading } from './action';


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setOffersDataLoading(true));
    const { data } = await api.get<TOffers>(APIRoute.Offers);
    dispatch(loadOffers(data));
    dispatch(setOffersDataLoading(false));
  },
);

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

