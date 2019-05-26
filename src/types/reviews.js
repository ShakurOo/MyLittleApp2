// @flow

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
