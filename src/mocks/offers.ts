import { TOffers } from '../types/offers';

const mockoffers: TOffers = [
  {
    id: 'fa76b5fe-2690-49ff-a0f0-ff45a39e29e9',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 359,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.6
  },
  {
    id: '26c85a7f-513f-44ad-b402-13c387b09e87',
    title: 'The house among olive ',
    type: 'hotel',
    price: 487,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.6
  },
  {
    id: 'dac2c573-fe38-4cb5-a010-6e5195d47516',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'room',
    price: 110,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 3.8
  },
  {
    id: '24dd781d-d83c-48be-a40b-4fd526583400',
    title: 'The Joshua Tree House',
    type: 'apartment',
    price: 104,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.7
  }
];

export default mockoffers;
