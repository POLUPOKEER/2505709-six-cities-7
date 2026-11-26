import { useEffect } from 'react';
import { useFavorite } from '../../hooks/use-favorite/use-favorite';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { getnearbyOffersStatus } from '../../store/near-by-offers/near-by-offers-selectors';
import { getOfferDetails, getOfferDetailsId, getOfferDetailsStatus } from '../../store/offer-details/offer-details.selectors';
import { fetchComments, fetchNearbyOffers, fetchOfferDetails } from '../../store/api-actions';
import Spinner from '../spinner/spinner';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../routes';
import Header from '../header';
import CommentsSection from './comments-section/comments-section';
import MapAndOffersNearSection from './map-and-offers-near-section/mapAndOffersNearSection';

type OfferContentProps = {
  id: string;
};

export default function OfferContent({ id }: OfferContentProps) {
  const dispatch = useAppDispatch();

  const offerDetails = useAppSelector(getOfferDetails);
  const offerDetailsStatus = useAppSelector(getOfferDetailsStatus);
  const offerDetailsId = useAppSelector(getOfferDetailsId);

  const nearbyOffersStatus = useAppSelector(getnearbyOffersStatus);

  const { isFavorite, handleFavoriteClick } = useFavorite(id);

  useEffect(() => {
    dispatch(fetchOfferDetails(id));
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (
    offerDetailsId !== id ||
    offerDetailsStatus === 'loading' ||
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
                  <img
                    className="offer__image"
                    src={imageURL}
                    alt="Photo studio"
                  />
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

                <button
                  className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={handleFavoriteClick}
                >
                  <svg
                    className="offer__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>

                  <span className="visually-hidden">
                    {isFavorite ? 'In bookmarks' : 'To bookmarks'}
                  </span>
                </button>
              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span
                    style={{
                      width: `${offerDetails.rating * 20}%`,
                    }}
                  />
                  <span className="visually-hidden">
                    Rating
                  </span>
                </div>

                <span className="offer__rating-value rating__value">
                  {offerDetails.rating}
                </span>
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
                <b className="offer__price-value">
                  &euro;{offerDetails.price}
                </b>
                <span className="offer__price-text">
                  &nbsp;night
                </span>
              </div>

              <div className="offer__inside">
                <h2 className="offer__inside-title">
                  What`s inside
                </h2>

                <ul className="offer__inside-list">
                  {offerDetails.goods.map((data) => (
                    <li
                      key={data}
                      className="offer__inside-item"
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="offer__host">
                <h2 className="offer__host-title">
                  Meet the host
                </h2>

                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offerDetails.host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
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

          <MapAndOffersNearSection currentOffer={offerDetails} />
        </section>
      </main>
    </div>
  );
}
