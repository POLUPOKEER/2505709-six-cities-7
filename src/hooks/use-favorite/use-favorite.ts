import { getFavoriteOffers } from '../../store/favorite-offers/favorite-offers-selectors';
import { changeOfferFavoriteStatus } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { AuthorizationStatus } from '../../const';
import { ROUTES } from '../../routes';
import { useNavigate } from 'react-router-dom';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';

export const useFavorite = (offerId: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const userAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  const isFavorite = favoriteOffers.some(
    (offer) => offer.id === offerId
  );

  const handleFavoriteClick = () => {
    if (userAuthorizationStatus !== AuthorizationStatus.Auth) {
      navigate(ROUTES.login);
      return;
    }

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
