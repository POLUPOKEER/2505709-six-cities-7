import { useEffect } from 'react';
import { getFavoriteOffersStatus } from '../../store/favorite-offers/favorite-offers-selectors';
import { useAppDispatch, useAppSelector } from '../../store/store-hooks';
import { getOffersStatus } from '../../store/offers/offers-selectors';
import { fetchFavoriteOffers, fetchOffers } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { AuthorizationStatus } from '../../const';

export default function useFetchOffers() {
  const dispatch = useAppDispatch();
  const offersStatus = useAppSelector(getOffersStatus);
  const favoriteOffersStatus = useAppSelector(getFavoriteOffersStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (offersStatus === 'idle') {
      dispatch(fetchOffers());
    }
  }, [dispatch, offersStatus]);

  useEffect(() => {
    if (favoriteOffersStatus === 'idle' && authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoriteOffers());
    }
  }, [dispatch, favoriteOffersStatus, authorizationStatus]);
}
