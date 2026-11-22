import { getFavoriteOffers } from '../store/favorite-offers/favorite-offers-selectors';
import { changeOfferFavoriteStatus } from '../store/api-actions';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useFavorite = (offerId: string) => {
  const dispatch = useAppDispatch();
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const isFavorite = favoriteOffers.some(
    (offer) => offer.id === offerId
  );

  const handleFavoriteClick = () => {
    dispatch(changeOfferFavoriteStatus({
      id: offerId,
      status: isFavorite ? 0 : 1,
    }));
  };

  return {
    isFavorite,
    handleFavoriteClick,
  };
};
