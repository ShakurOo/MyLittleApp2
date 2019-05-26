// @flow
import { createSelector } from 'reselect'
import type { State } from 'store'
import type { ApplicationState } from '../reducers/application'

const getApplication = (state: State): ApplicationState => state.application

export const getDevice = createSelector(
  getApplication,
  (state): ApplicationState => {
    console.log('SELECTOR GET DEVICE', state.device)
    return state.device
  }
)
