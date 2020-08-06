import { createSelector } from 'reselect'
import type { Store } from '@app/store'
import type { Device } from '@app/types'
import type { ApplicationState } from '../reducers/application'

const getApplication = (store: Store): ApplicationState => store.application

export const getDevice = createSelector(
  getApplication,
  (state): Device => {
    console.log('SELECTOR GET_DEVICE', state.device)
    return state.device
  }
)
