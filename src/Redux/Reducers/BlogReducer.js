import * as actionType from "../Actions/ActionType";
import { SINGLE_BLOG_SUCCESS } from "../Actions/ActionType";

const initialState = {
    loading: false,
    blogs: null,
    error: null,
    blog: null,
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BLOG_INIT:
            return {
                ...state,
                loading: true,
            }
        case actionType.BLOG_FAIL:
            {
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                }
            }
        case actionType.GET_BLOG:
            return {
                ...state,
                loading: false,
                blogs: action.data,
            }
        case actionType.SINGLE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                blog: action.data,
            }
        default:
            return state
    }

}

export default blogReducer;