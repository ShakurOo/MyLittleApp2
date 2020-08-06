import { Observable } from 'rxjs'
import type { AjaxResponse } from 'rxjs/ajax'
import { request } from './'

export const fetchReviews = (): Observable<AjaxResponse> => (
  request('//www.randomtext.me/api/')
)
