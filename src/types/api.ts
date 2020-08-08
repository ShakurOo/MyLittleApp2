import { AxiosResponse } from 'axios'
import type { Review } from './reviews'

export interface ReviewsAPIResponse extends AxiosResponse {
  data: Review
}