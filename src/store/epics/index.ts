import { combineEpics } from 'redux-observable'
import applicationEpic from './application'

export default combineEpics(
  applicationEpic
)
