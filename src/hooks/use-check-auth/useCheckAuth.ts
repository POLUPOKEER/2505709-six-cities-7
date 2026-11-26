import { useEffect } from 'react';
import { useAppDispatch } from '../../store/store-hooks';
import { checkAuthAction } from '../../store/api-actions';

export default function useCheckAuth() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);
}
