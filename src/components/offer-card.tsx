import { Link } from 'react-router-dom';
import { TOffer } from '../types/offers';
type OfferDataProps = {
  offerData: TOffer;
  onHover?: (id: string) => void;
  variant?: 'default' | 'favorites';
}

function OfferCard({ offerData, onHover, variant = 'default' }: OfferDataProps) {

  const isFavorites = variant === 'favorites';
  const cardSettings = isFavorites
    ? {
      cardClass: 'favorites__card place-card',
      imageWrapperClass: 'favorites__image-wrapper place-card__image-wrapper',
      infoClass: 'favorites__card-info place-card__info',
      width: 150,
      height: 110,
    }
    : {
      cardClass: 'cities__card place-card',
      imageWrapperClass: 'cities__image-wrapper place-card__image-wrapper',
      infoClass: 'place-card__info',
      width: 260,
      height: 200,
    };

  return (
    <article className={cardSettings.cardClass} onMouseEnter={() => onHover?.(offerData.id)}>
      {offerData.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>)}
      <div className={cardSettings.imageWrapperClass}>
        <Link to={`/offer/${offerData.id}`}>
          <img className="place-card__image" src={offerData.previewImage} width={cardSettings.width} height={cardSettings.height} alt="Place image" />
        </Link>
      </div>
      <div className={cardSettings.infoClass}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerData.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: 80 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/Offer/${offerData.id}`}>{offerData.title}</Link>
        </h2>
        <p className="place-card__type">{offerData.type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
