import { ofType } from 'redux-observable'
import { of } from 'rxjs'
import { switchMap, take, tap } from 'rxjs/operators'
import type { ActionsObservable, Epic } from '@app/store'
import { getDeviceInfo } from '../../helpers/useragents'
import { onSetDevice, GET_DEVICE, GetDeviceAction } from '../actions'

const appicationEpic: Epic = (
  actions$: ActionsObservable
) => actions$.pipe(
  ofType(GET_DEVICE as any),
  take(1),
  tap((action: GetDeviceAction) => {
    console.log('EPIC GET_DEVICE', action)
  }),
  switchMap(() => of(onSetDevice(getDeviceInfo())))
)

export default appicationEpic
