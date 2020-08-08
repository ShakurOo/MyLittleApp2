import type { ActionType, BasicAction } from '@app/types'

export interface GetDeviceAction extends BasicAction {
  type: 'GET_DEVICE'
}

export const GET_DEVICE: ActionType = 'GET_DEVICE'

interface GetDevice {
  (): GetDeviceAction
}
export const onGetDevice: GetDevice = () => ({
  type: 'GET_DEVICE'
})
