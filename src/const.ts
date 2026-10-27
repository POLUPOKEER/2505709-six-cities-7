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
  Logout = 'logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const TIMEOUT_SHOW_ERROR = 2000;
