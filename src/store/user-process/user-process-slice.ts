import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, AuthorizationStatus, RequestStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';

export type TUserProcessSlice = {
  authorizationStatus: AuthorizationStatus;
  userEmail: string | null;
  checkAuthStatus: RequestStatus;
};

const initialState: TUserProcessSlice = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: null,
  checkAuthStatus: 'idle',
};

export const UserProcessSlice = createSlice({
  name: NameSpace.UserData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state, action) => {
        if (action.payload === 401) {
          state.authorizationStatus = AuthorizationStatus.NoAuth;
        } else {
          state.checkAuthStatus = 'error';
        }
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
        state.userEmail = action.payload;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});


