type Confidentiality = 'public' | 'private'

export type Reviews = Array<Review>

export interface Review {
  author?: string,
  isPrivate: boolean,
  text: string,
  time: string
}

export interface ReviewForm {
  username: string,
  review: string,
  confidentiality: Confidentiality
}
