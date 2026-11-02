import { AuthorizationStatus } from '../../../const';
import { useAppSelector } from '../../../hooks';
import Comments from './comments';
import CommentsForm from './comments-form';


export default function CommentsSection() {


  const isAuthenticated = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);


  return (
    <section className="offer__reviews reviews">
      <Comments />
      {isAuthenticated && <CommentsForm />}
    </section>
  );
}
