export const DEFAULT_CITY = 'Paris';
export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export enum SortType {
  Popular = 'popular',
  PriceLowToHight = 'price-low-to-high',
  PriceHighToLow = 'price-high-to-low',
  TopRated = 'top-rated'
}

export enum APIRoute {
  Offers = '/offers',
  Favorite = 'favorite',
  Login = 'login',
  Logout = 'logout',
  Comments = 'comments'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;

export type RequestStatus = 'idle' | 'loading' | 'success' | 'error';

export enum NameSpace {
  AppErrorData = 'APP_ERROR_DATA',
  UserData = 'USER_DATA',
  OffersData = 'OFFERS_DATA',
  OfferDetailsData = 'OFFER_DETAIL_DATA',
  CommentsData = 'COMMENTS_DATA',
  NearByOffersData = 'NEAR_BY_OFFERS_DATA',
  FavoriteOffersData = 'FAVORITE_OFFERS_DATA'
}


