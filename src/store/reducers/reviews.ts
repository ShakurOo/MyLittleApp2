import type { Action } from '@app/store'
import type { ReviewForm, Review, Reviews } from '@app/types'
import { REVIEW_ADDED, REVIEW_FETCHED } from '../actions'

export interface ReviewsState {
  isFetched: boolean,
  isFetching: boolean,
  list: Reviews
}

export const initialState = {
  isFetched: false,
  isFetching: false,
  list: []
}

const reviewsReducer = (
  state: ReviewsState,
  action: Action
): ReviewsState => {
  switch (action.type) {
    case REVIEW_FETCHED: {
      /* eslint-disable @typescript-eslint/camelcase */
      const { text_out, time } = action.payload.review
      const newState = {
        ...state,
        list: [
          ...state.list,
          {
            author: null,
            isPrivate: false,
            text: text_out,
            time
          }
        ]
      }

      return newState
    }

    case REVIEW_ADDED: {
      const {
        confidentiality,
        username,
        review: text
      }: ReviewForm = action.payload.reviewForm

      const review: Review = {
        author: username,
        isPrivate: (confidentiality === 'private'),
        text,
        time: new Date().toLocaleTimeString()
      }

      return { ...state, list: [ ...state.list, review ] }
    }

    default:
      return state
  }
}

export default reviewsReducer
