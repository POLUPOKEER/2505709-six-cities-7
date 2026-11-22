import { TState } from '..';
import { NameSpace } from '../../const';

export const getFavoriteOffers = (state: TState) =>
  state[NameSpace.FavoriteOffersData].favoriteOffers;

export const getFavoriteOffersStatus = (state: TState) =>
  state[NameSpace.FavoriteOffersData].favoriteOffersStatus;
