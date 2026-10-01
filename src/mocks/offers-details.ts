const mockOffersDetails = [
  {
    id: '3a3cce2c-c9c7-46fd-a9d6-c524a4c29c19',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: 'hotel',
    price: 128,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg'
    ],
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
    goods: [
      'Coffee machine',
      'Wi-Fi',
      'Breakfast',
      'Washer',
      'Air conditioning',
      'Fridge',
      'Towels',
      'Cable TV'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.2,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: '67f0d359-fd1e-4580-a816-3ceebf442d57',
    title: 'The Joshua Tree House',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'apartment',
    price: 301,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
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
    goods: [
      'Baby seat',
      'Wi-Fi',
      'Heating',
      'Coffee machine',
      'Towels'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.4,
    bedrooms: 3,
    maxAdults: 4
  },
  {
    id: 'ba98da6c-6aab-4140-8654-46a865a705c4',
    title: 'Loft Studio in the Central Area',
    description: 'This is a place for dreamers to reset, reflect, and create. Designed with a \'slow\' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.',
    type: 'house',
    price: 327,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg'
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.916361,
      longitude: 6.944974,
      zoom: 16
    },
    goods: [
      'Cable TV',
      'Dishwasher',
      'Heating',
      'Air conditioning',
      'Fridge',
      'Baby seat',
      'Towels',
      'Coffee machine',
      'Washer',
      'Breakfast',
      'Kitchen',
      'Laptop friendly workspace',
      'Wi-Fi'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.6,
    bedrooms: 2,
    maxAdults: 8
  },
  {
    id: '23549b01-858a-4528-925f-da3d0748a2ad',
    title: 'The Pondhouse - A Magical Place',
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    type: 'apartment',
    price: 451,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg'
    ],
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.949361,
      longitude: 6.976974,
      zoom: 16
    },
    goods: [
      'Wi-Fi',
      'Coffee machine',
      'Breakfast',
      'Laptop friendly workspace',
      'Washing machine',
      'Washer',
      'Towels',
      'Cable TV'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.5,
    bedrooms: 4,
    maxAdults: 9
  },
  {
    id: '0e1b0a85-9a12-41f5-9317-80b00e3e0b9f',
    title: 'Beautiful & luxurious apartment at great location',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families or friends.',
    type: 'house',
    price: 277,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg'
    ],
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
    goods: [
      'Washing machine',
      'Air conditioning',
      'Cable TV',
      'Dishwasher',
      'Baby seat',
      'Heating',
      'Laptop friendly workspace',
      'Breakfast',
      'Wi-Fi',
      'Washer',
      'Towels'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.9,
    bedrooms: 5,
    maxAdults: 8
  },
  {
    id: '7310e6f4-9072-4778-bf99-f39c08c7d9d1',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'apartment',
    price: 220,
    images: [
      'https://14.design.htmlacademy.pro/static/hotel/20.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/8.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://14.design.htmlacademy.pro/static/hotel/13.jpg'
    ],
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
    goods: [
      'Baby seat',
      'Towels',
      'Air conditioning',
      'Dishwasher',
      'Washing machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.9,
    bedrooms: 3,
    maxAdults: 3
  }
];

export default mockOffersDetails;
