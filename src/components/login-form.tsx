import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { store } from '../store';
import { loginAction } from '../store/api-actions';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from '../const';
import { ROUTES } from '../routes';
import { useNavigate } from 'react-router-dom';
type LoginFormData = {
  email: string;
  password: string;
};

function LoginForm() {

  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(ROUTES.mainPage);
    }
  }, [authorizationStatus, navigate]);

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const handleInputChange = (
    evt: ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = evt.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isPasswordValid =
    !formData.password.includes(' ') &&
    /[A-Za-zА-Яа-я]/.test(formData.password) &&
    /\d/.test(formData.password);

  const isFormValid =
    formData.email.length > 0 &&
    isPasswordValid;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!isFormValid) {
      return;
    }

    // Заглушка вместо реальной авторизации
    store.dispatch(loginAction({ login: formData.email, password: formData.password }));
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">
          E-mail
        </label>

        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">
          Password
        </label>

        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <button
        className="login__submit form__submit button"
        type="submit"
        disabled={!isFormValid}
      >
        Sign in
      </button>
    </form>
  );
}

export default LoginForm;
