// @flow
import type { ActionType } from 'store'
import type { Device } from 'types'

export type SetDeviceAction = {|
  +type: 'SET_DEVICE',
  +device: Device
|}

export const SET_DEVICE: ActionType = 'SET_DEVICE'

type SetDevice = Device => SetDeviceAction
export const onSetDevice: SetDevice = device => {
  console.log('ACTION SET_DEVICE DISPATCHED ...')
  return ({
    type: 'SET_DEVICE',
    payload: { device }
  })
}

// /////////////////

export type GetDeviceAction = {|
  +type: 'GET_DEVICE'
|}

export const GET_DEVICE: ActionType = 'GET_DEVICE'

type GetDevice = () => GetDeviceAction
export const onGetDevice: GetDevice = () => ({
  type: 'GET_DEVICE'
})
