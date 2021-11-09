import * as actionType from "./ActionType";
import DataController from "../../API/DataController";

export const blogInit = () => {
  return {
    type: actionType.BLOG_INIT,
  };
};

export const blogFail = (error) => {
  return {
    type: actionType.BLOG_FAIL,
    error: error,
  };
};

export const getBlog = (data) => {
  return {
    type: actionType.GET_BLOG,
    data: data,
  };
};

export const getSingleBlogData = (data) => {
  return {
    type: actionType.SINGLE_BLOG_SUCCESS,
    data: data,
  };
};

export const getBlogData = () => {
  return async (dispatch) => {
    try {
      dispatch(blogInit());
      const response = await DataController.getData();
      dispatch(getBlog(response.data.blogs));
    } catch (error) {
      dispatch(blogFail(error));
    }
  };
};

export const getSingleBlog = (slug) => {
  return async (dispatch) => {
    try {
      dispatch(blogInit);
      const response = await DataController.getData();

      let data = response.data.blogs.filter(
        (word) => word.heading.toLowerCase().replace(/\s/g, "-") == slug
      );

      dispatch(getSingleBlogData(data[0]));
    } catch (error) {
      dispatch(blogFail(error));
    }
  };
};
