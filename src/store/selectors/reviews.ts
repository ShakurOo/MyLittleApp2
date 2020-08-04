// @flow
import { createSelector } from 'reselect'
import type { State } from '@app/store'
import { Reviews } from '@app/types'
import { ReviewsState } from '../reducers/reviews'

const getReviews = (state: State): ReviewsState => state.reviews

export const getReviewsList = createSelector(
  getReviews,
  (state): Reviews => state.list
)
