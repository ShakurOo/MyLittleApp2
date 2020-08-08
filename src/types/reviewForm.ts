export enum Confidentiality {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export type ReviewFormValues = {
  author: string,
  confidentiality: Confidentiality,
  review: string
}
