import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type TAppErrorSlice = {
  error: string | null;
};

const initialState: TAppErrorSlice = {
  error: null
};

export const AppErrorSlice = createSlice({
  name: NameSpace.AppErrorData,
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    }
  }
});

export const setError = AppErrorSlice.actions.setError;
