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
