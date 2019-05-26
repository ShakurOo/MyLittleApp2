// @flow
import type { Action } from 'store'
import type { Device } from 'types'
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
  if (action.type === SET_DEVICE) {
    const newState = { ...state, device: action.payload.device }
    console.log('REDUCER APPLICATION ', action)
    return newState
  }

  return state
}
