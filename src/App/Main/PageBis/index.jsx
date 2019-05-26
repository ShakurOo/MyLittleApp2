// @flow
import React from 'react'
import type { Device } from 'types'
import withConnect from './connector'
import style from './style'

type Props = {|
  +device: Device,
  +onGetDevice: () => void
|}

const PageBis = ({ device, onGetDevice }: Props) => (
  <div className={style.wrapper}>
    <h2>This is Just Another Page</h2>
    <br />

    <h3>Basic side effect example</h3>
    <p>Getting device infos from within EPIC middleware and setting result in application state</p>
    <button onClick={onGetDevice} type='button'>
      Get Device info
    </button>

    <h3>
      <strong>Current Device :</strong>
      <pre>{JSON.stringify(device, null, 2) }</pre>
    </h3>
  </div>
)

export default withConnect(PageBis)
