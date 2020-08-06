import { createSelector } from 'reselect'
import type { Store } from '@app/store'
import type { Reviews } from '@app/types'
import { ReviewsState } from '../reducers/reviews'

const getReviews = (store: Store): ReviewsState => store.reviews

export const getReviewsList = createSelector(
  getReviews,
  (state): Reviews => state.list
)
