
import React from 'react'
import { initialState } from '@app/store/reducers/reviews'
import type { Action } from '@app/types'

type ContextAPI = {
  state: typeof initialState,
  dispatch?: React.Dispatch<Action>
}

const ReviewsContext = React.createContext<ContextAPI>({
  state: initialState
})

export default ReviewsContext