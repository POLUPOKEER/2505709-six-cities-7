import { createSlice } from '@reduxjs/toolkit';
import { NameSpace, RequestStatus } from '../../const';
import { TComment } from '../../types/comments';
import { fetchComments, sendComment } from '../api-actions';

export type TCommentSlice = {
  comments: TComment[];
  commentsStatus: RequestStatus;
}

const initialState: TCommentSlice = {
  comments: [],
  commentsStatus: 'idle'
};

export const CommentsSlice = createSlice({
  name: NameSpace.CommentsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.commentsStatus = 'loading';
        state.comments = [];
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsStatus = 'success';
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, (state) => {
        state.commentsStatus = 'error';
        state.comments = [];
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments.unshift(action.payload);
      });
  },
});

