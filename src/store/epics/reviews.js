// @flow
import { empty, of } from 'rxjs'
import { catchError, delay, startWith, switchMap } from 'rxjs/operators'
import { ofType, type StateObservable } from 'redux-observable'
import type { ActionsObservable, Epic } from 'store'
import { fetchReviews } from 'api/reviews'
import {
  onReviewFetchStarted,
  onReviewFetched,
  onFetchReviewsErrors,
  GET_REVIEW
} from '../actions'

const reviewsEpic: Epic = (
  actions$: ActionsObservable,
  state$: StateObservable
) => actions$.pipe(
  ofType(GET_REVIEW),
  switchMap(() => fetchReviews().pipe(
    switchMap(({ response = [] }: { response: any }) => {
      console.log(response)
      return of(onReviewFetched(response))
    }),
    startWith(onReviewFetchStarted())
  )),
  catchError(() => of(onFetchReviewsErrors('Unable to fetch reviews')))

)

export default reviewsEpic
