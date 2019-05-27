// @flow
import { createSelector } from 'reselect'
import type { State } from 'store'
import type { ReviewsState } from '../reducers/reviews'

const getReviews = (state: State): ReviewsState => state.reviews

export const getReviewsList = createSelector(
  getReviews,
  (state): ReviewsState => state.list
)
