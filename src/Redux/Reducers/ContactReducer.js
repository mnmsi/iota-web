import {
  CONTACT_INIT,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
} from '../Actions/ActionType'

const initialState = {
  loading: false,
  data: null,
  error: null,
}

const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_INIT:
      return {
        ...state,
        loading: true,
      }
    case CONTACT_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    case CONTACT_FAIL:
      return {
        ...state,
        error: action.data,
        loading: false,
      }
    default:
      return state
  }
}

export default ContactReducer
