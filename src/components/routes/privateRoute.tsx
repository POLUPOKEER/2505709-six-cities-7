import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store-hooks';
import { AuthorizationStatus } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/user-process-selectors';
import { ROUTES } from '../../routes';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute({ children }: PrivateRouteProps) {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={ROUTES.login} />;
}

export default PrivateRoute;
