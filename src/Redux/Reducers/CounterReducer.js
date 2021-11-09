import {
  COUNTER_INIT,
  COUNTER_SUCCESS,
  COUNTER_FAIL,
} from '../Actions/ActionType';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INIT:
      return {
        ...state,
        loading: true,
      };
    case COUNTER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case COUNTER_FAIL:
      return {
        ...state,
        error: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default CounterReducer;
