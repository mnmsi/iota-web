import BaseController from './BaseController';
import { endpoint } from './Endpoint';
export default class WorkController extends BaseController {
  static works(pageNo) {
    let page = pageNo;
    return BaseController.axiosGetWithParams(endpoint.WORKS, { page });
  }
  static work(id) {
    return BaseController.axiosGetData(endpoint.WORK + id);
  }
}
