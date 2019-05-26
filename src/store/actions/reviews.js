// @flow
import type { ActionType } from 'store'
import type { Review } from 'types'

export type GetReviewAction = {|
  +type: 'GET_DEVICE'
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
  +payload: {| +review: Review |}
|}

export const REVIEW_FETCHED: ActionType = 'REVIEW_FETCHED'

type ReviewFetched = () => ReviewFetchedAction
export const onReviewFetched: ReviewFetched = review => ({
  type: 'REVIEW_FETCHED',
  payload: { review }
})
