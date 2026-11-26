import { useState } from 'react';

import CitiesList from '../../components/cities-list';

import { CITIES, SortType } from '../../const';

import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { changeCity } from '../../store/offers/offers-slice';

import Header from '../../components/header';
import MainSection from '../../components/main-page-components/main-section';
import { getCity, getOffers, getOffersStatus } from '../../store/offers/offers-selectors';
import MainEmptySection from '../../components/main-page-components/main-empty-section';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(getOffers);
  const offersStatus = useAppSelector(getOffersStatus);

  const currentCity = useAppSelector(getCity);


  const offersData = offers.filter(
    (offer) => offer.city.name === currentCity
  );
  const sortedOffers = [...offersData];

  const [sortType, setSortType] = useState(SortType.Popular);

  switch (sortType) {
    case SortType.PriceLowToHight:
      sortedOffers.sort((a, b) => a.price - b.price);
      break;

    case SortType.PriceHighToLow:
      sortedOffers.sort((a, b) => b.price - a.price);
      break;

    case SortType.TopRated:
      sortedOffers.sort((a, b) => b.rating - a.rating);
      break;

    case SortType.Popular:
    default:
      break;
  }


  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };


  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">
          Cities
        </h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              cities={CITIES}
              currentCity={currentCity}
              onCityChange={handleCityChange}
            />
          </section>
        </div>

        {offersStatus !== 'error' ?
          <MainSection
            offersData={offersData}
            currentCity={currentCity}
            sortType={sortType}
            setSortType={setSortType}
            sortedOffers={sortedOffers}
          />
          :
          <MainEmptySection currentCity={currentCity} />}
      </main>
    </div>
  );
}

export default MainPage;

