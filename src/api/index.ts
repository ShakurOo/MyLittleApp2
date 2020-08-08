import axios, { AxiosInstance, AxiosResponse } from 'axios'

let axiosRequest

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
  AxiosResponse,
  axiosRequest
}

export default axiosInstance
