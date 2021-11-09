import BaseController from './BaseController';
import { endpoint } from './Endpoint';
export default class ServiceController extends BaseController {
  static getService() {
    return BaseController.axiosGetData(endpoint.SERVICES);
  }
}
