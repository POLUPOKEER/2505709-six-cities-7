import { TState } from '..';
import { AuthorizationStatus, NameSpace, RequestStatus } from '../../const';

export const getAuthorizationStatus = (state: TState): AuthorizationStatus =>
  state[NameSpace.UserData].authorizationStatus;

export const getUserEmail = (state: TState): string | null =>
  state[NameSpace.UserData].userEmail;

export const getCheckAuthStatus = (state: TState): RequestStatus =>
  state[NameSpace.UserData].checkAuthStatus;
