import axios from "axios"
export default class BaseController {
	static localURL = process.env.REACT_APP_LOCAL_URL
	static baseURL = process.env.REACT_APP_BASE_URL
	static API_URL = process.env.REACT_APP_BASE_API_URL
	static API_LOCAL_URL = process.env.REACT_APP_LOCAL_API_URL

	static axiosGet(path) {
		return axios.get(this.baseURL + path)
	}

	static axiosGetData(path) {
		return axios.get(this.API_URL + path)
	}

	static axiosGetWithParams(path, params) {
		return axios.get(this.API_URL + path, {
			params: params,
		})
	}
}
