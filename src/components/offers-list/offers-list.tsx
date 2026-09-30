import { useState } from 'react';
import { TOffers, TOffer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offersData: TOffers;
}

export default function OffersList({ offersData }: OffersListProps) {

  const [activeCard, setActiveCard] = useState('');
  // eslint-disable-next-line no-console, no-alert
  // console.log(activeCard);

  const handleCardHover = (id: string) => {
    if (id !== activeCard) {
      setActiveCard(id);
    }
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offerData: TOffer) => (
        <OfferCard key={offerData.id} offerData={offerData} onHover={handleCardHover} />
      ))}
    </div>
  );
}
