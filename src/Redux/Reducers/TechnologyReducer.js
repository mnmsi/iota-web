import {
  TECHNOLOGY_SUCCESS,
  TECHNOLOGY_INIT,
  TECHNOLOGY_FAIL,
} from "../Actions/ActionType";
const initialState = {
  loading: false,
  data: null,
  error: null,
};
const TechnologyReducer = (state = initialState, action) => {
  switch (action.type) {
    case TECHNOLOGY_INIT:
      return {
        ...state,
        loading: true,
      };
    case TECHNOLOGY_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case TECHNOLOGY_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default TechnologyReducer;
