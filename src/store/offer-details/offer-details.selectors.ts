import { TState } from '..';
import { NameSpace, RequestStatus } from '../../const';
import { TOfferDetails } from '../../types/offerDetails';

export const getOfferDetails = (state: TState): TOfferDetails | null =>
  state[NameSpace.OfferDetailsData].offerDetails;

export const getOfferDetailsId = (state: TState): string | null =>
  state[NameSpace.OfferDetailsData].offerDetailsId;

export const getOfferDetailsStatus = (state: TState): RequestStatus =>
  state[NameSpace.OfferDetailsData].offerDetailsStatus;
