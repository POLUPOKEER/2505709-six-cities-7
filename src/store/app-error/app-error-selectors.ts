import { NameSpace } from '../../const';
import { TState } from '..';

export const getError = (state: TState): string | null =>
  state[NameSpace.AppErrorData].error;
