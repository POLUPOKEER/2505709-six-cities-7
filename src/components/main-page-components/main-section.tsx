import { SortType } from '../../const';
import { TOffers } from '../../types/offers';
import OffersList from '../offers-list';
import PlacesSortingForm from '../places-sorting-form';
import Map from '../map';
import { useCallback, useState } from 'react';

type MainSectionProps = {
  offersData: TOffers;
  currentCity: string;
  sortType: SortType;
  setSortType: (sortType: SortType) => void;
  sortedOffers: TOffers;
};

function MainSection({
  offersData,
  currentCity,
  sortType,
  setSortType,
  sortedOffers,
}: MainSectionProps) {

  const [activeOfferId, setActiveOfferId] = useState('');
  const handleCardHover = useCallback((id: string) => {
    if (id !== activeOfferId) {
      setActiveOfferId(id);
    }
  }, []);

  const handleCardLeave = useCallback(() => {
    setActiveOfferId('');
  }, []);


  return (
    <div className="cities">
      <div className="cities__places-container container">

        <section className="cities__places places">
          <h2 className="visually-hidden">
            Places
          </h2>

          <b className="places__found">
            {offersData.length} places to stay in {currentCity}
          </b>

          <PlacesSortingForm
            currentSort={sortType}
            onSortChange={setSortType}
          />

          <OffersList
            offersData={sortedOffers}
            onCardHover={handleCardHover}
            onCardLeave={handleCardLeave}
          />
        </section>

        <div className="cities__right-section">
          <Map
            offersData={offersData}
            activeOfferId={activeOfferId}
          />
        </div>

      </div>
    </div>);
}
export default MainSection;
