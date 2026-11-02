import { useAppSelector } from '../../../hooks';
import Spinner from '../../spinner/spinner';
import OffersNear from './offer-near-section';
import Map from '../../map';
import { TOfferDetails } from '../../../types/offerDetails';
import { TOffer } from '../../../types/offers';

type MapAndOffersNearSectionProps = {
  currentOffer: TOfferDetails;
};
export default function MapAndOffersNearSection({ currentOffer }: MapAndOffersNearSectionProps) {
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers);
  const nearbyOffersStatus = useAppSelector((state) => state.nearbyOffersStatus);
  const offersForMap = [currentOffer as TOffer, ...nearbyOffers];

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
    <div className='container'>
      <Map offersData={offersForMap} activeOfferId={currentOffer.id} />
      <OffersNear nearbyOffers={nearbyOffers} />
    </div>

  );
}
