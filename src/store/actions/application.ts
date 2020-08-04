// @flow
import type { ActionType } from '@app/store'
import type { Device } from '@app/types'

export interface SetDeviceAction {
  type: 'SET_DEVICE',
  payload: {
    device: Device
  }
}

export const SET_DEVICE: ActionType = 'SET_DEVICE'

interface SetDevice {
  (device: Device): SetDeviceAction
}
export const onSetDevice: SetDevice = device => {
  console.log('ACTION SET_DEVICE DISPATCHED ...')
  return ({
    type: 'SET_DEVICE',
    payload: { device }
  })
}

// /////////////////

export interface GetDeviceAction {
  type: 'GET_DEVICE'
}

export const GET_DEVICE: ActionType = 'GET_DEVICE'

interface GetDevice { (): GetDeviceAction }
export const onGetDevice: GetDevice = () => ({
  type: 'GET_DEVICE'
})
