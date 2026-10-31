import { useAppSelector } from '../hooks';
import OfferCard from './offer-card';
import Spinner from './spinner/spinner';

export default function OfferNearSection() {
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const nearbyOffersStatus = useAppSelector((state) => state.nearbyOffersStatus);

  if (nearbyOffersStatus === 'idle' || nearbyOffersStatus === 'loading') {
    return <Spinner />;
  }

  if (nearbyOffersStatus === 'error') {
    return <p>Failed to load nearby offers. Please try again later.</p>;
  }

  if (nearbyOffers.length === 0) {
    return <p>No nearby offers available.</p>;
  }

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearbyOffers.map((offer) => (<OfferCard key={offer.id} offerData={offer} />))}
      </div>
    </section>
  );
}

