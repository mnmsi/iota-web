import BaseController from './BaseController';
import { endpoint } from './Endpoint';
export default class ContactController extends BaseController {
  static getContact() {
    return BaseController.axiosGetData(endpoint.CONTACT_US);
  }
}
