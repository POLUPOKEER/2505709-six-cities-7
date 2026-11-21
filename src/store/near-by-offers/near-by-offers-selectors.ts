import { TState } from '..';
import { NameSpace, RequestStatus } from '../../const';
import { TOffers } from '../../types/offers';

export const getnearbyOffers = (state: TState): TOffers =>
  state[NameSpace.NearByOffersData].nearbyOffers;

export const getnearbyOffersStatus = (state: TState): RequestStatus =>
  state[NameSpace.NearByOffersData].nearbyOffersStatus;

