import { getDeviceInfo } from '@app/helpers/useragents'
import { isActionType } from '@app/helpers/redux'
import type { Action } from '@app/store'
import { GET_DEVICE } from '../actions/device'

export type DeviceInterface =
    'Smartphone Android app'
  | 'Tablette Android app'
  | 'Iphone app'
  | 'Ipad app'
  | 'Website'
  | 'Webapp'

export interface Device {
  interface: DeviceInterface,
  webview: boolean|null,
  webviewAndroid: boolean|null,
  webviewIOS: boolean|null
}

export interface DeviceState {
  interface: string|null,
  webview: boolean|null,
  webviewAndroid: boolean|null,
  webviewIOS: boolean|null
}

export const initialState = {
  interface: null,
  webview: null,
  webviewAndroid: null,
  webviewIOS: null
}

export default (
  state: DeviceState = initialState,
  action: Action
): DeviceState => {

  if (isActionType(GET_DEVICE, action)) {
    const device = getDeviceInfo()
    const newState = device

    console.log('REDUCER GET_DEVICE ', device)
    return newState
  }

  return state
}
