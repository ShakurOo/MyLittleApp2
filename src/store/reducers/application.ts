// @flow
import type { Action } from 'store'
import type { Device } from 'types'
import { isActionType } from 'helpers/redux'
import { SET_DEVICE } from '../actions'

export type ApplicationState = {|
  +device: ?Device
|}

const initialState = {
  device: {
    webview: null,
    webviewAndroid: null,
    webviewIOS: null,
    interface: null
  }
}

export default (state: ApplicationState = initialState, action: Action): ApplicationState => {
  if (isActionType(SET_DEVICE, action)) {
    const newState = { ...state, device: action.payload.device }
    console.log('REDUCER SET_DEVICE ', action)
    return newState
  }

  return state
}
