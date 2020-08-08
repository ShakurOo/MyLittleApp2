import type {
  FormAuthorChangedAction,
  FormConfidentialityChangedAction,
  FormTextChangedAction
} from '@app/App/Main/Views/AddReview/actions/reviewForm'
import type {
  AddReviewAction,
  GetDeviceAction,
  GetReviewAction,
  ReviewFetchedAction,
  ReviewFetchErrorAction,
  ReviewFetchStartedAction,
  SetDeviceAction
} from './actions'

export interface BasicAction {
  readonly type: ActionType,
  readonly payload?: Payload
}

export type ActionType = string

export type Action =
  AddReviewAction
| FormAuthorChangedAction
| FormConfidentialityChangedAction
| FormTextChangedAction
| GetDeviceAction
| SetDeviceAction
| GetReviewAction
| ReviewFetchedAction
| ReviewFetchErrorAction
| ReviewFetchStartedAction

export type ActionCreator = {
  (type: ActionType, payload?: Payload): BasicAction
}

export type Payload = any // eslint-disable-line

export interface Reducer<State> {
  (state: State, action: BasicAction): State
}
