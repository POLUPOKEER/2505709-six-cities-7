import { useAppSelector } from '../../store/store-hooks';
import { getError } from '../../store/app-error/app-error-selectors';
import './error-message.css';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getError);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
