import {
  SERVICE_INIT,
  SERVICE_SUCCESS,
  SERVICE_FAIL,
} from '../Actions/ActionType';

const initialSatate = {
  loading: false,
  data: null,
  error: null,
};

const ServiceReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case SERVICE_INIT:
      return {
        ...state,
        loading: true,
      };
    case SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case SERVICE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default ServiceReducer;
