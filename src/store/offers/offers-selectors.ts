import { TState } from '..';
import { NameSpace, RequestStatus } from '../../const';
import { TOffers } from '../../types/offers';

export const getCity = (state: TState): string =>
  state[NameSpace.OffersData].city;

export const getOffers = (state: TState): TOffers =>
  state[NameSpace.OffersData].offers;

export const getOffersStatus = (state: TState): RequestStatus =>
  state[NameSpace.OffersData].offersStatus;
