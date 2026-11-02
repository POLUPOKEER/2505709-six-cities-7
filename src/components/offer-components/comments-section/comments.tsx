import { useAppSelector } from '../../../hooks';
import Spinner from '../../spinner/spinner';


function Comments() {

  const comments = useAppSelector((state) => state.comments);
  const commentsStatus = useAppSelector((state) => state.commentsStatus);


  if (commentsStatus === 'idle' || commentsStatus === 'loading') {
    return <Spinner />;
  }

  if (commentsStatus === 'error') {
    return <p>Failed to load comments. Please try again later.</p>;
  }

  if (comments.length === 0) {
    return <p>Комментариев пока нет</p>;
  }

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment) => (
          <li key={comment.id} className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
              </div>
              <span className="reviews__user-name">
                {comment.user.name}
              </span>
              {comment.user.isPro && (
                <span className="offer__user-status">
                  Pro
                </span>
              )}
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{ width: `${comment.rating * 20}%` }}></span>
                  <span className="visually-hidden">{comment.rating}</span>
                </div>
              </div>
              <p className="reviews__text">
                {comment.comment}
              </p>
              <time className="reviews__time" dateTime="2019-04-24">{comment.date.slice(0, 10)}</time>
            </div>
          </li>
        ))}

      </ul>
    </>
  );
}

export default Comments;
