import { CAREER_INIT, CAREER_SUCCESS, CAREER_FAIL } from './ActionType';
import DataController from '../../API/DataController';
export const careerInit = () => {
  return {
    type: CAREER_INIT,
  };
};

export const careerSuccess = (data) => {
  return {
    type: CAREER_SUCCESS,
    data: data,
  };
};

export const careerFail = (error) => {
  return {
    type: CAREER_FAIL,
    error: error,
  };
};

export const careerData = () => {
  return async (dispathc) => {
    dispathc(careerInit());
    const response = await DataController.getData();
    dispathc(careerSuccess(response.data.accordionData));
    try {
    } catch (err) {
      dispathc(careerFail(err));
    }
  };
};
