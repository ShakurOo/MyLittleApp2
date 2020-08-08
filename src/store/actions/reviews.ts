import type {
  ActionType,
  BasicAction,
  Review,
  ReviewFormValues
} from '@app/types'

export interface AddReviewAction extends BasicAction {
  type: 'ADD_REVIEW',
  payload: {
    reviewForm: ReviewFormValues
  }
}

export const ADD_REVIEW: ActionType = 'ADD_REVIEW'

interface AddReview {
  (reviewForm: ReviewFormValues): AddReviewAction
}
export const onAddReview: AddReview = reviewForm => ({
  type: 'ADD_REVIEW',
  payload: {
    reviewForm
  }
})

export interface GetReviewAction extends BasicAction {
  type: 'GET_REVIEW'
}

export const GET_REVIEW: ActionType = 'GET_REVIEW'

interface GetReview {
  (): GetReviewAction
}
export const onGetReview: GetReview = () => ({
  type: 'GET_REVIEW'
})

export interface ReviewFetchStartedAction extends BasicAction {
  type: 'REVIEW_FETCH_STARTED'
}

export const REVIEW_FETCH_STARTED: ActionType = 'REVIEW_FETCH_STARTED'

interface ReviewFetchStarted {
  (): ReviewFetchStartedAction
}
export const onReviewFetchStarted: ReviewFetchStarted = () => ({
  type: 'REVIEW_FETCH_STARTED'
})

export interface ReviewFetchErrorAction extends BasicAction {
  type: 'REVIEW_FETCH_ERROR',
  payload: {
    error: { message: string }
  }
}

export const REVIEW_FETCH_ERROR: ActionType = 'REVIEW_FETCH_ERROR'

interface ReviewFetchError {
  (message: string): ReviewFetchErrorAction
}
export const onReviewFetchError: ReviewFetchError = message => ({
  type: 'REVIEW_FETCH_ERROR',
  payload: {
    error: { message }
  }
})

export interface ReviewFetchedAction extends BasicAction {
  type: 'REVIEW_FETCHED',
  payload: {
    review: Review
  }
}

export const REVIEW_FETCHED: ActionType = 'REVIEW_FETCHED'

interface ReviewFetched {
  (review: Review): ReviewFetchedAction
}
export const onReviewFetched: ReviewFetched = review => ({
  type: 'REVIEW_FETCHED',
  payload: {
    review
  }
})