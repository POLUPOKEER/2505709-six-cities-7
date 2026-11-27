import React from 'react';
import { TOffers, TOffer } from '../types/offers';
import OfferCard from './offer-card';

type OffersListProps = {
  offersData: TOffers;
  onCardHover: (id: string) => void;
  onCardLeave: () => void;
}

function OffersList({ offersData, onCardHover, onCardLeave }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offerData: TOffer) => {
        // eslint-disable-next-line no-console
        console.log('asdkaid', offerData.id);
        return (
          <OfferCard
            key={offerData.id}
            offerData={offerData}
            onHover={onCardHover}
            onLeave={onCardLeave}
          />
        );
      })}
    </div>
  );
}

export default React.memo(OffersList);
