import xhr2 from 'xhr2'
import { ajax } from 'rxjs/ajax'
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'

let
  axiosAdapter,
  axiosRequest

interface AxiosInstanceCallParams {
  endpoint: string
}



const isJSDOM = navigator.userAgent.includes('Node.js') || navigator.userAgent.includes('jsdom')
const XHR = isJSDOM ? xhr2 : XMLHttpRequest

export const request = (url, params?) => (
  ajax({
    url,
    body: params || null,
    method: (params ? 'POST' : 'GET'),
    withCredentials: false,
    responseType: 'json',
    createXHR: () => new XHR(),
    crossDomain: true
  })
)


const axiosInstance = ({
  endpoint
}: AxiosInstanceCallParams): AxiosInstance => {

  axiosRequest = axios.CancelToken.source()

  return axios.create({
    baseURL: endpoint,
    timeout: 1000
  })
}

export {
  axios,
  axiosAdapter,
  AxiosResponse,
  axiosRequest,
  AxiosRequestConfig
}

export default axiosInstance
