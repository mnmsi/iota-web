import { CLIENTS_INIT, CLIENTS_SUCCESS, CLIENTS_FAIL } from "./ActionType";
import DataController from "../../API/DataController";

export const clientsInit = () => {
  return {
    type: CLIENTS_INIT,
  };
};

export const clientsSuccess = (data) => {
  return {
    type: CLIENTS_SUCCESS,
    data: data,
  };
};

export const clientsFail = (error) => {
  return {
    type: CLIENTS_FAIL,
    error: error,
  };
};

export const allClientsData = () => {
  return async (dispatch) => {
    try {
      dispatch(clientsInit());
      const response = await DataController.getData();
      if (response) {
        dispatch(clientsSuccess(response.data.clients));
      } else {
      }
    } catch (err) {
      dispatch(clientsFail(err));
    }
  };
};
