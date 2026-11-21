import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AppDispatch, TState } from '.';
import { AxiosInstance } from 'axios';
import { TOffers } from '../types/offers';
import { APIRoute, TIMEOUT_SHOW_ERROR } from '../const';
import { setError } from './app-error/app-error-slice';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { dropToken, saveToken } from '../services/token';
import { TOfferDetails } from '../types/offerDetails';
import { TComment, TCommentFormData } from '../types/comments';


export const fetchOffersAction = createAsyncThunk<TOffers, undefined, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TOffers>(APIRoute.Offers);
    return data;
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

export const fetchNearbyOffers = createAsyncThunk<
  TOffers,
  string,
  {
    extra: AxiosInstance;
  }
>(
  'offer/fetchNearbyOffers',
  async (id, { extra: api }) => {
    const { data } = await api.get<TOffers>(
      `${APIRoute.Offers}/${id}/nearby`
    );

    return data?.slice(0, 3);
  }
);

export const fetchComments = createAsyncThunk<
  TComment[],
  string,
  {
    extra: AxiosInstance;
  }
>(
  'offer/fetchComments',
  async (id, { extra: api }) => {
    const { data } = await api.get<TComment[]>(
      `${APIRoute.Comments}/${id}`
    );

    return data;
  }
);

type TSendCommentParams = TCommentFormData & {
  id: string;
};
export const sendComment = createAsyncThunk<
  TComment,
  TSendCommentParams,
  {
    extra: AxiosInstance;
  }
>(
  'offer/sendComment',
  async ({ id, comment, rating }, { extra: api }) => {
    const { data } = await api.post<TComment>(
      `${APIRoute.Comments}/${id}`,
      {
        comment,
        rating,
      }
    );

    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/checkAuth',
  async (_arg, { extra: api }) => {
    await api.get(APIRoute.Login);
  }
);

export const loginAction = createAsyncThunk<string, AuthData, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/login',
  async ({ email, password }, { extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
    return email;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: TState;
  extra: AxiosInstance;
}
>(
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
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

