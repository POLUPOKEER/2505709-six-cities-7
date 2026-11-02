import { FormEvent, ChangeEvent, useState, Fragment } from 'react';
import { TCommentFormData } from '../../../types/comments';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { sendComment } from '../../../store/api-actions';


function CommentsForm() {

  const offerId = useAppSelector((state) => state.offerDetailsId);

  const [formData, setFormData] = useState<TCommentFormData>({
    comment: '',
    rating: 0,
  });

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: +evt.target.value,
    });
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: evt.target.value,
    });
  };

  const dispatch = useAppDispatch();

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    await dispatch(
      sendComment({
        id: offerId as string,
        comment: formData.comment,
        rating: formData.rating,
      })
    ).unwrap();
  };
  const ratingOptions = [
    { value: 5, title: 'perfect' },
    { value: 4, title: 'good' },
    { value: 3, title: 'not bad' },
    { value: 2, title: 'badly' },
    { value: 1, title: 'terribly' },
  ];
  const isFormValid =
    formData.comment.length >= 50 &&
    formData.comment.length <= 300 &&
    formData.rating >= 1 &&
    formData.rating <= 5;

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        void handleSubmit(evt);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>


      <div className="reviews__rating-form form__rating">
        {ratingOptions.map(({ value, title }) => {
          const id = `${value}-stars`;

          return (
            <Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                id={id}
                type="radio"
                checked={formData.rating === value}
                onChange={handleRatingChange}
              />

              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleReviewChange}
      />

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentsForm;
