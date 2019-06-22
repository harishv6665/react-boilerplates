import {
  ACTION_INCREMENT_COUNT,
  ACTION_DECREMENT_COUNT
} from '../constants/constants';

export const incrementCount = () => ({ type: ACTION_INCREMENT_COUNT });
export const decrementCount = () => ({ type: ACTION_DECREMENT_COUNT });
