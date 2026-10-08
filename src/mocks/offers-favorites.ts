import { TOffers } from '../types/offers';

const mockoffersFavorites: TOffers = [
  {
    id: '3a3cce2c-c9c7-46fd-a9d6-c524a4c29c19',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 128,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
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
    isFavorite: true,
    isPremium: true,
    rating: 1.2
  },
  {
    id: '0e1b0a85-9a12-41f5-9317-80b00e3e0b9f',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 277,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.862556999999995,
      longitude: 4.375697,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.9
  },
  {
    id: '7310e6f4-9072-4778-bf99-f39c08c7d9d1',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 220,
    previewImage: 'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.842557,
      longitude: 4.3536969999999995,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 1.9
  }
];

export default mockoffersFavorites;
