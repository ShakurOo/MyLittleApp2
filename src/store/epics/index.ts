// @flow
import { combineEpics } from 'redux-observable'
import applicationEpic from './application'
import reviewsEpic from './reviews'

export default combineEpics(
  applicationEpic,
  reviewsEpic
)
