import { getDeviceInfo } from '@app/helpers/useragents'
import type { Action, Device } from '@app/types'
import { GET_DEVICE } from '../actions/device'

export interface DeviceState extends Device {}

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

  switch (action.type) {
    case GET_DEVICE: {
      const device = getDeviceInfo()
      const newState = device

      console.log('REDUCER GET_DEVICE ', device)
      return newState
    }

    default:
      return state
  }
}
