// @flow
import type { Action } from 'store'
import type { Review } from 'types'
import { REVIEW_FETCHED } from '../actions'

export type ReviewsState = {|
  +list: ?Array<Review>
|}

const initialState = {
  list: []
}

export default (state: ReviewsState = initialState, action: Action): ReviewsState => {
  if (action.type === REVIEW_FETCHED) {
    const newState = {
      ...state,
      list: [
        ...state.list,
        action.payload.review
      ]
    }
    return newState
  }

  return state
}
