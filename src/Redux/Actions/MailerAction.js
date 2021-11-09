import * as actionType from './ActionType';
import MailerController from '../../API/MailerController';

export const mailInit = () => {
  return {
    type: actionType.MAIL_INIT,
  };
};

export const mailFail = (error) => {
  return {
    type: actionType.MAIL_FAIL,
    error: error,
  };
};

export const mailSuccess = (data) => {
  return {
    type: actionType.MAIL_SUCCESS,
    data: data,
  };
};

export const mailSuccessUpdate = (data) => {
  return {
    type: actionType.MAIL_SUCCESS,
    data: data,
  };
};

export const sendMail = (data) => {
  return (dispatch) => {
    try {
      dispatch(mailInit());

      MailerController.sendMail(data)
        .then((result) => {
          if (result.status == 1) {
            dispatch(mailSuccess(result.data));
          } else {
            dispatch(mailFail(result.error));
          }
        })
        .catch((error) => {
          dispatch(mailFail(error));
        });
    } catch (error) {
      dispatch(mailFail(error));
    }
  };
};

export const sendCareerMail = (data) => {
  return (dispatch) => {
    try {
      dispatch(mailInit());

      MailerController.sendCareerMail(data)
        .then((result) => {
          if (result.status == 1) {
            dispatch(mailSuccess(result.status));
          } else {
            dispatch(mailFail(result.error));
          }
        })
        .catch((error) => {
          dispatch(mailFail(error));
        });
    } catch (error) {
      dispatch(mailFail(error));
    }
  };
};

export const sendProgressMailData = (data) => {
  return (dispatch) => {
    try {
      dispatch(mailInit());
      MailerController.sendProgressMail(data)
        .then((result) => {
          if (result.status == 1) {
            dispatch(mailSuccess(result.status));
          } else {
            dispatch(mailFail(result.error));
          }
        })
        .catch((error) => {
          dispatch(mailFail(error));
        });
    } catch (error) {
      dispatch(mailFail(error));
    }
  };
};
export const updateMailSuccess = () => {
  return (dispatch) => {
    try {
      dispatch(mailSuccessUpdate(0));
    } catch (error) {
      dispatch(mailFail(error));
    }
  };
};
