import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({ reducer });

export type TState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
