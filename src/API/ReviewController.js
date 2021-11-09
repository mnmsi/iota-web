import BaseController from './BaseController';
import { endpoint } from './Endpoint';
export default class ReviewController extends BaseController {
  static getReview() {
    return BaseController.axiosGetData(endpoint.REVIEWS);
  }
}
