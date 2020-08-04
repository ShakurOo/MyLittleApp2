import { isActionType } from '@app/helpers/redux'
import type { Action } from '@app/store'
import type { Device } from '@app/types'
import { SET_DEVICE } from '../actions'

export interface ApplicationState {
  device: Device
}

const initialState = {
  device: {
    interface: null,
    webview: null,
    webviewAndroid: null,
    webviewIOS: null
  }
}

export default (
  state: ApplicationState = initialState,
  action: Action
): ApplicationState => {

  if (isActionType(SET_DEVICE, action)) {
    const newState = {
      ...state,
      device: action.payload.device
    }
    console.log('REDUCER SET_DEVICE ', action)
    return newState
  }

  return state
}
