// @flow

type Confidentiality = 'public' | 'private'

export type Review = {|
  +amount: number,
  author: ?string,
  +format: string,
  +isPrivate: boolean,
  +number: number,
  +text: string,
  +time: string,
  +type: string
|}

export type ReviewForm = {|
  +username: string,
  +review: string,
  +confidentiality: Confidentiality
|}
