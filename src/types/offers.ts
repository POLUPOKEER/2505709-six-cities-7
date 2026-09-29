type TUrlPrevImgPath = string;


type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type TCity = {
  name: string;
  location: TLocation;
}

export type TOffer = {
  id: string;
  title: string;
  // type: 'hotel' | 'apartment' | 'room' | 'house';
  type: string;
  price: number;
  previewImage: TUrlPrevImgPath;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type TOffers = TOffer[]

