import { TOffers, TOffer } from '../types/offers';
import OfferCard from './offer-card';

type OffersListProps = {
  offersData: TOffers;
  onCardHover: (id: string) => void;
  onCardLeave: () => void;
}

export default function OffersList({ offersData, onCardHover, onCardLeave }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offerData: TOffer) => (
        <OfferCard key={offerData.id} offerData={offerData} onHover={onCardHover} onLeave={onCardLeave} />
      ))}
    </div>
  );
}
