
import { Navigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../routes';

import OfferContent from '../../components/offer-components/OfferContent';


function Offer() {
  const { id } = useParams();

  if (!id) {
    return <Navigate to={ROUTES.notFound} replace />;
  }

  return <OfferContent id={id} />;
}

export default Offer;

