import { TState } from '..';
import { NameSpace, RequestStatus } from '../../const';
import { TComments } from '../../types/comments';

export const getComments = (state: TState): TComments =>
  state[NameSpace.CommentsData].comments;

export const getCommentsStatus = (state: TState): RequestStatus =>
  state[NameSpace.CommentsData].commentsStatus;
