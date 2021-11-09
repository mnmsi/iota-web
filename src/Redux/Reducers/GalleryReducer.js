import {
  GALLERY_INIT,
  GALLERY_SUCCESS,
  GALLERY_FAIL,
} from "../Actions/ActionType";

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GALLERY_INIT:
      return {
        ...state,
        loading: true,
      };
    case GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };

    case GALLERY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default galleryReducer;
