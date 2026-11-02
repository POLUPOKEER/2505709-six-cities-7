import { TOffers } from '../../../types/offers';
import OfferCard from '../../offer-card';

type OffersNearProps = {
  nearbyOffers: TOffers;
};
export default function OffersNear({ nearbyOffers }: OffersNearProps) {


  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => (<OfferCard key={offer.id} offerData={offer} />))}
      </div>
    </section>
  );
}

