import {
  ACTION_INCREMENT_COUNT,
  ACTION_INCREMENT_COUNT_SUCCESS,
  ACTION_DECREMENT_COUNT,
  ACTION_DECREMENT_COUNT_SUCCESS
} from '../constants/constants';

export const incrementCount = () => ({ type: ACTION_INCREMENT_COUNT });
export const incrementCountSuccess = () => ({ type: ACTION_INCREMENT_COUNT_SUCCESS });

export const decrementCount = () => ({ type: ACTION_DECREMENT_COUNT });
export const decrementCountSuccess = () => ({ type: ACTION_DECREMENT_COUNT_SUCCESS });
