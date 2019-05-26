// @flow
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import type { Observable } from 'rxjs'
import * as api from '../api'
import application, { type ApplicationState } from './reducers/application'
import type { GetDeviceAction, SetDeviceAction } from './actions'
import epics from './epics'

export type State = { +application: ApplicationState }
export type Action = GetDeviceAction | SetDeviceAction
export type ActionType = string
export type ActionCreator<A:Action> = (...any) => A
export type GetState = () => State
export type Store = { getState: GetState }
export type ActionsObservable = Observable<Action>
export type Epic = (ActionsObservable, State) => ActionsObservable
export type EpicWithInjection = (ActionsObservable, State, { api?: any }) => ActionsObservable
export type Selector<T> = State => T
export type Reducer<S> = (S, Action) => S

const reducer = combineReducers({
  application
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
