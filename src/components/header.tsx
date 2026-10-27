import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../const';
import { logoutAction } from '../store/api-actions';
import { store } from '../store';


function Header(): JSX.Element {

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const userEmail = useAppSelector((state) => state.userEmail);

  const handleLogout = () => {
    store.dispatch(logoutAction());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={ROUTES.mainPage}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={ROUTES.favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper" />

                      <span className="header__user-name user__name">
                        {userEmail}
                      </span>

                      <span className="header__favorite-count">
                        3
                      </span>
                    </Link>
                  </li>

                  <li className="header__nav-item">
                    <button
                      className="header__nav-link header__signout"
                      type="button"
                      onClick={handleLogout}
                    >
                      Sign out
                    </button>
                  </li>
                </>
              ) : (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={ROUTES.login}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />

                    <span className="header__signout">
                      Sign in
                    </span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

