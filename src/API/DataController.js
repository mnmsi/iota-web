import BaseController from './BaseController';
import { endpoint } from './Endpoint';

export default class BlogController extends BaseController {
  static getData() {
    return BaseController.axiosGet('Data.json');
  }
}
