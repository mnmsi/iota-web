import { REVIEW_INIT, REVIEW_SUCCESS, REVIEW_FAIL } from './ActionType';
import ReviewController from '../../API/ReviewController';
export const reviewInit = () => {
  return {
    type: REVIEW_INIT,
  };
};

export const reviewSuccess = (data) => {
  return {
    type: REVIEW_SUCCESS,
    data: data,
  };
};

export const reviewFail = (error) => {
  return {
    type: REVIEW_FAIL,
    error: error,
  };
};

export const reviewData = () => {
  return async (dispathc) => {
    dispathc(reviewInit());
    ReviewController.getReview().then((res) => {
      if (res.status === 200) {
        dispathc(reviewSuccess(res.data));
      } else {
        dispathc(reviewFail('Something went wrong'));
      }
    });
    try {
    } catch (error) {
      dispathc(reviewFail(error));
    }
  };
};
