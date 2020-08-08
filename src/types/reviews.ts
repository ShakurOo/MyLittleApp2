export type Reviews = Array<Review>

export interface Review {
  author?: string,
  isPrivate: boolean,
  text: string,
  text_out?: string,
  time: string
}