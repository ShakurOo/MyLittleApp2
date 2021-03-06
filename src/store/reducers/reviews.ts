import type {
  Action,
  Review,
  ReviewFormValues,
  Reviews
} from '@app/types'
import { Confidentiality } from '@app/types'
import { ADD_REVIEW, REVIEW_FETCHED } from '../actions/reviews'

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
        ],
        isFetched: true
      }

      return newState
    }

    case ADD_REVIEW: {
      const {
        author,
        confidentiality,
        review: text
      }: ReviewFormValues = action.payload.reviewForm

      const review: Review = {
        author,
        isPrivate: (confidentiality === Confidentiality.PRIVATE),
        text,
        time: new Date().toLocaleTimeString()
      }

      return {
        ...state,
        list: [ ...state.list, review ],
        isFetched: true
      }
    }

    default:
      return state
  }
}

export default reviewsReducer
