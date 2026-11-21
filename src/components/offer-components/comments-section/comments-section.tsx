import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import { getAuthorizationStatus } from '../../../store/user-process/user-process-selectors';
import Comments from './comments';
import CommentsForm from './comments-form';


export default function CommentsSection() {


  const isAuthenticated = useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;


  return (
    <section className="offer__reviews reviews">
      <Comments />
      {isAuthenticated && <CommentsForm />}
    </section>
  );
}
