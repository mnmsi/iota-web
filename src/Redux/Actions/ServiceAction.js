import { SERVICE_INIT, SERVICE_SUCCESS, SERVICE_FAIL } from './ActionType';
import ServiceController from '../../API/ServiceController';
export const ServiceInit = () => {
  return {
    type: SERVICE_INIT,
  };
};

export const ServiceSuccess = (data) => {
  return {
    type: SERVICE_SUCCESS,
    data: data,
  };
};

export const ServiceFail = (error) => {
  return {
    type: SERVICE_FAIL,
    error: error,
  };
};

export const serviceData = () => {
  return async (dispathc) => {
    dispathc(ServiceInit());
    ServiceController.getService().then((res) => {
      if (res.status === 200) {
        dispathc(ServiceSuccess(res.data));
      } else {
        dispathc(ServiceFail('Something went wrong'));
      }
    });
    try {
    } catch (error) {
      dispathc(ServiceFail(error));
    }
  };
};
