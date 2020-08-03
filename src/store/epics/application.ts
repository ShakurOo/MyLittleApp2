// @flow
import { of } from 'rxjs'
import { switchMap, take, tap } from 'rxjs/operators'
import { ofType, type StateObservable } from 'redux-observable'
import type { ActionsObservable, Epic } from '@app/store'
import { getDeviceInfo } from '../../helpers/useragents'
import { onSetDevice, GET_DEVICE, type GetDeviceAction } from '../actions'

const appicationEpic: Epic = (
  actions$: ActionsObservable,
  state$: StateObservable
) => actions$.pipe(
  ofType(GET_DEVICE),
  take(1),
  tap((action: GetDeviceAction) => {
    console.log('EPIC GET_DEVICE', action)
  }),
  switchMap((action: GetDeviceAction) => of(onSetDevice(getDeviceInfo())))
)

export default appicationEpic
