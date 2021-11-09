import * as ActionType from './ActionType';
import DataController from '../../API/DataController';
import WorkController from '../../API/WorkController';
export const workInit = () => {
  return {
    type: ActionType.WORK_INIT,
  };
};

export const workFail = (error) => {
  return {
    type: ActionType.WORK_FAIL,
    error: error,
  };
};

export const getWork = (data) => {
  return {
    type: ActionType.WORK_DATA,
    data: data,
  };
};

export const getSingleWork = (data) => {
  return {
    type: ActionType.SINGLE_WORK_DATA,
    data: data,
  };
};

// single work

export const getSingleWorkData = (id) => {
  return (dispathc) => {
    try {
      WorkController.work(id).then((res) => {
        if (res.status === 200) {
          dispathc(getSingleWork(res.data.data));
        } else {
          dispathc(workFail('something went wrong!'));
        }
      });
    } catch (err) {
      dispathc(workFail(err));
    }
  };
};

export const getAllWork = (pageNo) => {
  return (dispathc) => {
    dispathc(workInit());
    WorkController.works(pageNo)
      .then((res) => {
        if (res.status === 200) {
          dispathc(getWork(res.data.output));
        } else {
          dispathc(workFail('something went wrong'));
        }
      })
      .catch((err) => dispathc(workFail(err)));
  };
};
