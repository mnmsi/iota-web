import BaseController from './BaseController'
import { endpoint } from './Endpoint'
export default class TechnologyController extends BaseController {
  static technology() {
    return BaseController.axiosGetData(endpoint.TECHNOLOGY)
  }
}
