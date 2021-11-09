import {
  REVIEW_INIT,
  REVIEW_SUCCESS,
  REVIEW_FAIL,
} from "../Actions/ActionType";

const initialSatate = {
  loading: false,
  data: null,
  error: null,
};

const ReviewReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case REVIEW_INIT:
      return {
        ...state,
        loading: true,
      };
    case REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case REVIEW_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default ReviewReducer;
