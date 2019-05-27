// @flow

type Confidentiality = 'public' | 'private'

export type Review = {|
  +author: ?string,
  +isPrivate: boolean,
  +text: string,
  +time: string,
|}

export type ReviewForm = {|
  +username: string,
  +review: string,
  +confidentiality: Confidentiality
|}
