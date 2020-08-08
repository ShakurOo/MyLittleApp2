import type {
  FormAuthorChangedAction,
  FormConfidentialityChangedAction,
  FormTextChangedAction
} from '@app/App/Main/Views/AddReview/actions/reviewForm'
import type {
  GetDeviceAction
} from '@app/App/Main/Views/Home/actions/device'
import type {
  AddReviewAction,
  GetReviewAction,
  ReviewFetchedAction,
  ReviewFetchErrorAction,
  ReviewFetchStartedAction
} from '@app/store/actions/reviews'

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
| GetReviewAction
| ReviewFetchedAction
| ReviewFetchErrorAction
| ReviewFetchStartedAction

export type ActionCreator = {
  (type: ActionType, payload?: Payload): BasicAction
}

export type Payload = any

export interface Reducer<State> {
  (state: State, action: BasicAction): State
}
