import * as actionType from '../Actions/ActionType';
import { SINGLE_BLOG_SUCCESS } from '../Actions/ActionType';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const mailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.MAIL_INIT:
      return {
        ...state,
        loading: true,
      };
    case actionType.MAIL_FAIL:
      return {
        ...state,
        loading: false,
        data: action.error,
      };
    case actionType.MAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default mailerReducer;
