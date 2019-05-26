// @flow
import type { AjaxObservable } from 'rxjs/ajax'
import { request } from './'

export const fetchReviews = (): AjaxObservable => (
  request('//www.randomtext.me/api/')
)
