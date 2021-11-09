import {
  CAREER_INIT,
  CAREER_SUCCESS,
  CAREER_FAIL,
} from "../Actions/ActionType";
const initialState = {
  loading: false,
  data: null,
  error: null,
};
const careerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAREER_INIT:
      return {
        ...state,
        loading: true,
      };
    case CAREER_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case CAREER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default careerReducer;
