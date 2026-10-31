import { Navigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../routes';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchComments, fetchNearbyOffers, fetchOfferDetails } from '../../store/api-actions';
import Spinner from '../../components/spinner/spinner';
import Header from '../../components/header';
import CommentsSection from '../../components/comments-section/comments-section';
import OfferNearSection from '../../components/offer-near-section';
function Offer() {

  const { id } = useParams();
  const dispatch = useAppDispatch();

  const offerDetails = useAppSelector((state) => state.offerDetails);
  const offerDetailsStatus = useAppSelector((state) => state.offerDetailsStatus);
  const offerDetailsId = useAppSelector((state) => state.offerDetailsId);

  const nearbyOffersStatus = useAppSelector((state) => state.nearbyOffersStatus);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(fetchOfferDetails(id));
      dispatch(fetchNearbyOffers(id));
      dispatch(fetchComments(id));
    }
  }, [id, dispatch]);

  if (id === undefined) {
    return <Navigate to={ROUTES.notFound} replace />;
  }

  if (
    offerDetailsId !== id ||
    offerDetailsStatus === 'idle' ||
    offerDetailsStatus === 'loading' ||
    nearbyOffersStatus === 'idle' ||
    nearbyOffersStatus === 'loading'
  ) {
    return <Spinner />;
  }

  if (offerDetailsStatus === 'error' || offerDetails === null) {
    return <Navigate to={ROUTES.notFound} replace />;
  }


  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offerDetails.images.map((imageURL) => (
                <div key={imageURL} className="offer__image-wrapper">
                  <img className="offer__image" src={imageURL} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offerDetails.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offerDetails.title}
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${offerDetails.rating * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offerDetails.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {offerDetails.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offerDetails.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offerDetails.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offerDetails.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offerDetails.goods.map((data) => (
                    <li key={data} className="offer__inside-item">
                      {data}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offerDetails.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offerDetails.host.name}
                  </span>
                  {offerDetails.host.isPro && (
                    <span className="offer__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offerDetails.description}
                  </p>
                </div>
              </div>
              <CommentsSection />
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <OfferNearSection />
        </div>
      </main>
    </div >
  );
}

export default Offer;
