import type { ActionType } from '@app/store'
import type { Review, ReviewForm } from '@app/types'

export interface GetReviewAction {
  type: 'GET_REVIEW'
}

export const GET_REVIEW: ActionType = 'GET_REVIEW'

interface GetReview {
  (): GetReviewAction
}
export const onGetReview: GetReview = () => ({
  type: 'GET_REVIEW'
})

// /////////////////

export interface ReviewFetchStartedAction {
  type: 'REVIEW_FETCH_STARTED'
}

export const REVIEW_FETCH_STARTED: ActionType = 'REVIEW_FETCH_STARTED'

interface ReviewFetchStarted {
  (): ReviewFetchStartedAction
}
export const onReviewFetchStarted: ReviewFetchStarted = () => ({
  type: 'REVIEW_FETCH_STARTED'
})

// /////////////////

export interface ReviewFetchErrorAction {
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

// /////////////////

export interface ReviewFetchedAction {
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

// /////////////////

export interface ReviewAddStartedAction {
  type: 'REVIEW_ADD_STARTED',
  payload: {
    reviewForm: ReviewForm
  }
}

export const REVIEW_ADD_STARTED: ActionType = 'REVIEW_ADD_STARTED'

interface ReviewAddStarted {
  (reviewForm: ReviewForm): ReviewAddStartedAction
}
export const onReviewAddStarted: ReviewAddStarted = reviewForm => ({
  type: 'REVIEW_ADD_STARTED',
  payload: {
    reviewForm
  }
})

// /////////////////

export interface ReviewAddedAction {
  type: 'REVIEW_ADDED',
  payload: {
    reviewForm: ReviewForm
  }
}

export const REVIEW_ADDED: ActionType = 'REVIEW_ADDED'

interface ReviewAdded {
  (reviewForm: ReviewForm): ReviewAddedAction
}
export const onReviewAdded: ReviewAdded = reviewForm => ({
  type: 'REVIEW_ADDED',
  payload: {
    reviewForm
  }
})
