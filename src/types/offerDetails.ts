import { TOffer } from './offers';


export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TOfferDetails = TOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: THost;
  images: string[];
  maxAdults: number;
}
