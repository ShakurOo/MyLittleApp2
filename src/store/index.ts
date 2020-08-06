import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import type { Observable } from 'rxjs'
import * as api from '../api'
import application, { ApplicationState } from './reducers/application'
import reviews, { ReviewsState } from './reducers/reviews'
import type {
  GetDeviceAction,
  GetReviewAction,
  ReviewAddedAction,
  ReviewAddStartedAction,
  ReviewFetchedAction,
  ReviewFetchErrorAction,
  ReviewFetchStartedAction,
  SetDeviceAction
} from './actions'
import epics from './epics'

export interface BasicAction {
  readonly type: ActionType,
  readonly payload?: Payload
}

export type ActionType = string

export type Action =
  GetDeviceAction
| SetDeviceAction
| GetReviewAction
| ReviewAddedAction
| ReviewAddStartedAction
| ReviewFetchedAction
| ReviewFetchErrorAction
| ReviewFetchStartedAction

export type ActionCreator = {
  (type: ActionType, payload?: Payload): BasicAction
}

export interface GetStore {
  (): Store
}

export type Payload = any // eslint-disable-line

export interface Reducer<State> {
  (state: State, action: BasicAction): State
}

export interface Selector<State, R> {
  (state: State): R
}

export type ActionsObservable = Observable<Action>

export type Epic = (ActionsObservable, State) => ActionsObservable

export type EpicWithInjection = (ActionsObservable, State, { api: any }) => ActionsObservable

export type Store = {
  application: ApplicationState,
  reviews: ReviewsState
}

const reducer = combineReducers({
  application,
  reviews
})

const middlewares = []

const epicMiddleware = createEpicMiddleware({
  dependencies: { api }
})

middlewares.push(epicMiddleware)

const storeCreator = (initialState: any | {} = {}) => createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
)

const store = storeCreator()

epicMiddleware.run(epics)

export { store, storeCreator }
