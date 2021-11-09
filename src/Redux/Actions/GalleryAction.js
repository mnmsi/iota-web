import { GALLERY_INIT, GALLERY_SUCCESS, GALLERY_FAIL } from './ActionType';
import DataController from '../../API/DataController';
import GalleryController from '../../API/GalleryController';

export const galleryInit = () => {
  return {
    type: GALLERY_INIT,
  };
};

export const gallerySuccess = (data) => {
  return {
    type: GALLERY_SUCCESS,
    data: data,
  };
};

export const galleryFail = (error) => {
  return {
    type: GALLERY_FAIL,
    error: error,
  };
};

export const getGalleryData = () => {
  return async (dispathc) => {
    try {
      dispathc(galleryInit());
      const response = await DataController.getData();
      dispathc(gallerySuccess(response.data.photos));
    } catch (error) {
      dispathc(galleryFail(error));
    }
  };
};

export const getAllImage = (pageNo) => {
  return (dispathc) => {
    try {
      GalleryController.getImage(pageNo).then((res) => {
        if (res.status === 200) {
          dispathc(gallerySuccess(res.data.data));
        } else {
          dispathc(galleryFail('something went wrong'));
        }
      });
    } catch (err) {
      dispathc(galleryFail(err));
    }
  };
};
