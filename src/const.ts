export const DEFAULT_CITY = 'Paris';
export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export type SortType =
  | 'popular'
  | 'price-low-to-high'
  | 'price-high-to-low'
  | 'top-rated';

export enum APIRoute {
  Offers = '/offers',
  Favorite = 'favorite',
}

export const TIMEOUT_SHOW_ERROR = 2000;
