import { TOffers, TOffer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type OffersListProps = {
  offersData: TOffers;
}

export default function OffersList({ offersData }: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersData.map((offerData: TOffer) => (
        <OfferCard key={offerData.id} offerData={offerData} />
      ))}
    </div>
  );
}
