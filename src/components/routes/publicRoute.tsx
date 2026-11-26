import { Navigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../store/store-hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { ROUTES } from '../../routes';


type PublicRouteProps = {
  children: JSX.Element;
};

export default function PublicRoute({ children }: PublicRouteProps) {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? <Navigate to={ROUTES.mainPage} />
    : children;
}

