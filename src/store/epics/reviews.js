// @flow
import { of } from 'rxjs'
import { catchError, startWith, switchMap, tap } from 'rxjs/operators'
import { ofType, type StateObservable } from 'redux-observable'
import type { ActionsObservable, Epic } from 'store'
import type { ReviewForm } from 'types'
import { fetchReviews } from 'api/reviews'
import history from '../../hashHistory'
import { scriptHTMLTagRegex } from 'helpers/regex'
import { isActionType } from 'helpers/redux'
import {
  onReviewAdded,
  onReviewFetchStarted,
  onReviewFetched,
  onFetchReviewsErrors,
  GET_REVIEW,
  REVIEW_ADD_STARTED,
  type ReviewAddedAction,
  type ReviewFetchedAction,
  type ReviewAddStartedAction,
  type GetReviewAction
} from '../actions'

const getReviewFromUserForm = (action: ReviewAddStartedAction): Oservable<ReviewAddedAction> => {
  const reviewForm: ReviewForm = action.payload.reviewForm

  // Prevent SCRIPT Injection
  const usernameWithoutScriptTag = reviewForm.username.replace(scriptHTMLTagRegex, '')
  const reviewWithoutScriptTag = reviewForm.review.replace(scriptHTMLTagRegex, '')

  return of(onReviewAdded({
    ...reviewForm,
    username: usernameWithoutScriptTag,
    review: reviewWithoutScriptTag
  })).pipe(tap(history.push('/reviews?newReview=true')))
}

const getReviewFromAPI = (): Observable<GetReviewAction | ReviewFetchedAction> => {
  return fetchReviews().pipe(
    switchMap(({ response = [] }: { response: any }) => of(onReviewFetched(response))),
    startWith(onReviewFetchStarted())
  )
}

const reviewsEpic: Epic = (
  actions$: ActionsObservable,
  state$: StateObservable
) => actions$.pipe(
  ofType(GET_REVIEW, REVIEW_ADD_STARTED),
  switchMap((action: GetReviewAction | ReviewAddStartedAction) => (
    (isActionType(GET_REVIEW, action))
      ? getReviewFromAPI()
      : getReviewFromUserForm(action)
  )),
  catchError(() => of(onFetchReviewsErrors('Unable to fetch reviews')))

)

export default reviewsEpic
