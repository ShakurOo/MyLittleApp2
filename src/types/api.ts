import { AxiosResponse } from 'axios'

export interface APIReviewResponse extends AxiosResponse {
  data: {
    author: string,
    isPrivate: boolean,
    text: string,
    time: string
  }
}