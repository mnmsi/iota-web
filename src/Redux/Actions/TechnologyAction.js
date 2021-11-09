import TechnologyController from '../../API/TechnologyController'
import {
  TECHNOLOGY_INIT,
  TECHNOLOGY_SUCCESS,
  TECHNOLOGY_FAIL,
} from './ActionType'

export const technologyInit = () => {
  return {
    type: TECHNOLOGY_INIT,
  }
}

export const technologySuccess = (data) => {
  return {
    type: TECHNOLOGY_SUCCESS,
    data: data,
  }
}

export const technologyFail = (error) => {
  return {
    type: TECHNOLOGY_FAIL,
    error: error,
  }
}

export const getTechnologyData = () => {
  return (dispathc) => {
    try {
      dispathc(technologyInit())
      TechnologyController.technology().then((res) => {
        if (res.status === 200) {
          dispathc(technologySuccess(res.data))
        } else {
          dispathc(technologyFail('something went wrong'))
        }
      })
    } catch (error) {
      dispathc(technologyFail(error))
    }
  }
}
