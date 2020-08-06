import { Observable, of } from 'rxjs'
import { catchError, startWith, switchMap, tap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { fetchReviews } from '@app/api/reviews'
import { isActionType } from '@app/helpers/redux'
import { scriptHTMLTagRegex } from '@app/helpers/regex'
import type { ActionsObservable, Epic } from '@app/store'
import type { ReviewForm } from '@app/types'
import history from '../../hashHistory'
import {
  GET_REVIEW,
  GetReviewAction,
  REVIEW_ADD_STARTED,
  ReviewAddStartedAction,
  ReviewAddedAction,
  ReviewFetchedAction,
  onReviewAdded,
  onReviewFetchError,
  onReviewFetchStarted,
  ReviewFetchStartedAction,
  onReviewFetched
} from '../actions'

const getReviewFromUserForm = (action: ReviewAddStartedAction): Observable<ReviewAddedAction> => {
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

const getReviewFromAPI = (): Observable<ReviewFetchStartedAction | ReviewFetchedAction> => {
  return fetchReviews().pipe(
    switchMap(({ response = [] }: { response: any }) => of(onReviewFetched(response))),
    startWith(onReviewFetchStarted())
  )
}

const reviewsEpic: Epic = (
  actions$: ActionsObservable
) => actions$.pipe(
  ofType(GET_REVIEW as any, REVIEW_ADD_STARTED),
  switchMap((action: GetReviewAction | ReviewAddStartedAction) => (
    (isActionType(GET_REVIEW, action))
      ? getReviewFromAPI()
      : getReviewFromUserForm(action as ReviewAddStartedAction)
  )),
  catchError(() => of(onReviewFetchError('Unable to fetch reviews')))

)

export default reviewsEpic
