import BaseController from './BaseController';
import { endpoint } from './Endpoint';
export default class CounterController extends BaseController {
  static getCounter() {
    return BaseController.axiosGetData(endpoint.COUNTER);
  }
}
