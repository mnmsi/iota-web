import { VIDEO_INIT, VIDEO_SUCCESS, VIDEO_FAIL } from "../Actions/ActionType";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const VideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIDEO_INIT:
      return {
        ...state,
        loading: true,
      };
    case VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default VideoReducer;
