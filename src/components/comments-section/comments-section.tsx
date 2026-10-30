import Comments from './comments';
import CommentsForm from './comments-form';

export default function CommentsSection() {
  return (
    <section className="offer__reviews reviews">
      <Comments />
      <CommentsForm />
    </section>
  );
}
