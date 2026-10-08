import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  children: JSX.Element;
  isAuth: boolean;
};

function PrivateRoute({ children, isAuth }: PrivateRouteProps) {

  return isAuth
    ? children
    : <Navigate to="/login" />;
}

export default PrivateRoute;
