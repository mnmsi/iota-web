import BaseController from './BaseController'
import { endpoint } from './Endpoint'
export default class GalleryController extends BaseController {
  static getImage(pageNo) {
    let page = pageNo
    return BaseController.axiosGetWithParams(endpoint.IMGAE, { page })
  }
  static getVideo(pageNo) {
    let page = pageNo
    return BaseController.axiosGetWithParams(endpoint.VIDEO, { page })
  }
}
