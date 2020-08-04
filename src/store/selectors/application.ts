// @flow
import { createSelector } from 'reselect'
import type { State } from '@app/store'
import { Device } from '@app/types'
import type { ApplicationState } from '../reducers/application'

const getApplication = (state: State): ApplicationState => state.application

export const getDevice = createSelector(
  getApplication,
  (state): Device => {
    console.log('SELECTOR GET_DEVICE', state.device)
    return state.device
  }
)
