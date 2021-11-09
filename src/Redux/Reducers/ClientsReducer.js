import {
  CLIENTS_INIT,
  CLIENTS_SUCCESS,
  CLIENTS_FAIL,
} from "../Actions/ActionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENTS_INIT:
      return {
        ...state,
        loading: true,
      };
    case CLIENTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    case CLIENTS_FAIL:
      return {
        ...state,
        error: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default clientsReducer;
