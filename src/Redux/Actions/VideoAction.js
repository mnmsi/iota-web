import { VIDEO_INIT, VIDEO_SUCCESS, VIDEO_FAIL } from './ActionType'
import GalleryController from '../../API/GalleryController'
export const videoInit = () => {
  return {
    type: VIDEO_INIT,
  }
}

export const videoSuccess = (data) => {
  return {
    type: VIDEO_SUCCESS,
    data: data,
  }
}

export const videoFail = (error) => {
  return {
    type: VIDEO_FAIL,
    error: error,
  }
}

export const getVidoeData = (pageNo) => {
  return (dispathc) => {
    try {
      dispathc(videoInit())
      GalleryController.getVideo(pageNo).then((res) => {
        if (res.status === 200) {
          dispathc(videoSuccess(res.data.data))
        } else {
          dispathc(videoFail('something went wrong'))
        }
      })
    } catch (error) {
      dispathc(videoFail(error))
    }
  }
}
