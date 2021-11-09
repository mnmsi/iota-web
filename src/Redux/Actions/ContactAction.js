import { CONTACT_INIT, CONTACT_SUCCESS, CONTACT_FAIL } from './ActionType'
import ContactController from '../../API/ContactController'
export const ContactInit = () => {
  return {
    type: CONTACT_INIT,
  }
}

export const ContactSuccess = (data) => {
  return {
    type: CONTACT_SUCCESS,
    data: data,
  }
}

export const ContactFail = (error) => {
  return {
    type: CONTACT_FAIL,
    error: error,
  }
}

export const getContact = () => {
  return (dispathc) => {
    try {
      dispathc(ContactInit())
      ContactController.getContact().then((res) => {
        if (res.status === 200) {
          dispathc(ContactSuccess(res.data.data))
        } else {
          dispathc(ContactFail('Something went wrong'))
        }
      })
    } catch (err) {
      dispathc(ContactFail(err))
    }
  }
}
