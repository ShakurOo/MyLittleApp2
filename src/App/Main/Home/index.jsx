// @flow
import React from 'react'
import withConnect from './connector'
import style from './style'

type Props = {|
  +device: Device,
  +onGetDevice: () => void
|}

const Home = ({ device, onGetDevice }: Props) => (
  <div className={style.wrapper}>
    <h1>Welcome in MyLittleApp</h1>

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

export default withConnect(Home)
