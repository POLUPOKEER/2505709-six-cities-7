import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import Comments from './comments';
import CommentsForm from './comments-form';

type CommentsSectionProps = {
  offerId: string;
};

export default function CommentsSection({ offerId }: CommentsSectionProps) {


  const isAuthenticated = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);


  return (
    <section className="offer__reviews reviews">
      <Comments offerId={offerId} />
      {isAuthenticated && <CommentsForm offerId={offerId} />}
    </section>
  );
}
