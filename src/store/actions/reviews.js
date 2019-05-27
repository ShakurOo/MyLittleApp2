// @flow
import type { ActionType } from 'store'
import type { Review, ReviewForm } from 'types'

export type GetReviewAction = {|
  +type: 'GET_REVIEW'
|}

export const GET_REVIEW: ActionType = 'GET_REVIEW'

type GetReview = () => GetReviewAction
export const onGetReview: GetReview = () => ({
  type: 'GET_REVIEW'
})

// /////////////////

export type ReviewFetchStartedAction = {|
  +type: 'REVIEW_FETCH_STARTED'
|}

export const REVIEW_FETCH_STARTED: ActionType = 'REVIEW_FETCH_STARTED'

type ReviewFetchStarted = () => ReviewFetchStartedAction
export const onReviewFetchStarted: ReviewFetchStarted = () => ({
  type: 'REVIEW_FETCH_STARTED'
})

// /////////////////

export type ReviewFetchErrorAction = {|
  +type: 'REVIEW_FETCH_ERROR',
  +payload: { error: { message: string } }
|}

export const REVIEW_FETCH_ERROR: ActionType = 'REVIEW_FETCH_ERROR'

type ReviewFetchError = () => ReviewFetchErrorAction
export const onReviewFetchError: ReviewFetchError = message => ({
  type: 'REVIEW_FETCH_ERROR',
  payload: { error: { message } }
})

// /////////////////

export type ReviewFetchedAction = {|
  +type: 'REVIEW_FETCHED',
  +payload: { +review: Review }
|}

export const REVIEW_FETCHED: ActionType = 'REVIEW_FETCHED'

type ReviewFetched = () => ReviewFetchedAction
export const onReviewFetched: ReviewFetched = review => ({
  type: 'REVIEW_FETCHED',
  payload: { review }
})

// /////////////////

export type ReviewAddStartedAction = {|
  +type: 'REVIEW_ADD_STARTED',
  +payload: { reviewForm: ReviewForm }
|}

export const REVIEW_ADD_STARTED: ActionType = 'REVIEW_ADD_STARTED'

type ReviewAddStarted = () => ReviewAddStartedAction
export const onReviewAddStarted: ReviewAddStarted = reviewForm => ({
  type: 'REVIEW_ADD_STARTED',
  payload: { reviewForm }
})

// /////////////////

export type ReviewAddedAction = {|
  +type: 'REVIEW_ADDED',
  +payload: { reviewForm: ReviewForm }
|}

export const REVIEW_ADDED: ActionType = 'REVIEW_ADDED'

type ReviewAdded = () => ReviewAddedAction
export const onReviewAdded: ReviewAdded = reviewForm => ({
  type: 'REVIEW_ADDED',
  payload: { reviewForm }
})
