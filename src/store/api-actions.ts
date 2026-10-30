import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, TState } from '.';
import { AxiosInstance } from 'axios';
import { TOffers } from '../types/offers';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { loadOffers, requireAuthorization, setError, setOffersDataLoading, setUserEmail } from './action';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { TOfferDetails } from '../types/offerDetails';


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

export const fetchOfferDetails = createAsyncThunk<
  TOfferDetails,
  string,
  {
    extra: AxiosInstance;
  }
>(
  'offer/fetchOfferDetails',
  async (id, { extra: api }) => {
    const { data } = await api.get<TOfferDetails>(
      `${APIRoute.Offers}/${id}`
    );

    return data;
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    dispatch(setUserEmail(email));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
  }
>(
  'app/clearError',
  (_arg, { dispatch }) => {
    setTimeout(() => {
      dispatch(setError(null));
    }, TIMEOUT_SHOW_ERROR);
  },
);

