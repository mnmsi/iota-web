import * as ActionType from "../Actions/ActionType";

const initialState = {
  loading: false,
  works: null,
  work: null,
  error: null,
};

const workReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.WORK_INIT:
      return {
        ...state,
        loading: true,
      };
    case ActionType.WORK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case ActionType.WORK_DATA:
      return {
        ...state,
        loading: false,
        works: action.data,
      };
    case ActionType.SINGLE_WORK_DATA:
      return {
        ...state,
        loading: false,
        work: action.data,
      };

    default:
      return state;
  }
};

export default workReducer;
