import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { TState, AppDispatch } from './index';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

