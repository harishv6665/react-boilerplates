import {
  ACTION_DECREMENT_COUNT_SUCCESS,
  ACTION_INCREMENT_COUNT_SUCCESS
} from '../constants/constants';

const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
  case ACTION_INCREMENT_COUNT_SUCCESS:
    return {
      ...state,
      count: state.count + 1
    };
  case ACTION_DECREMENT_COUNT_SUCCESS:
    return {
      ...state,
      count: state.count > 0 ? state.count - 1 : 0
    };
  default:
    return state;
  }
};

export default counter;
