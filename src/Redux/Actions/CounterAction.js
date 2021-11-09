import { COUNTER_INIT, COUNTER_SUCCESS, COUNTER_FAIL } from './ActionType';

import CounterController from '../../API/CounterController';

export const CounterInit = () => {
  return {
    type: COUNTER_INIT,
  };
};

export const CounterSuccess = (data) => {
  return {
    type: COUNTER_SUCCESS,
    data: data,
  };
};

export const CounterFail = (error) => {
  return {
    type: COUNTER_FAIL,
    error: error,
  };
};

export const getCounter = () => {
  return (dispathc) => {
    try {
      dispathc(CounterInit());
      CounterController.getCounter().then((res) => {
        if (res.status === 200) {
          dispathc(CounterSuccess(res.data.data));
        } else {
          dispathc(CounterFail('Something went wrong'));
        }
      });
    } catch (err) {
      dispathc(CounterFail(err));
    }
  };
};
