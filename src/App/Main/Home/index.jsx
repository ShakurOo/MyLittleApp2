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

    <h3>Basic data flow example</h3>
    <p>Explanation :</p>
    <ul>
      <li>Button component trigger an event (redux action)</li>
      <li>The action is handled by a middleware (Epic)</li>
      <li>The middleware produce a side-effect as trigger a new action including in payload the correct device data</li>
      <li>A reducer catch this action and populate the store</li>
      <li>A selector (getter), detects the change, compute the newest value</li>
      <li>Finally, the prop is updated, the connected component is rerender through the inner component lifecycle mechanisme</li>
    </ul>
    <button onClick={onGetDevice} type='button'>
      Get Device info
    </button>

    <h3>
      <strong>Current Device :</strong>
      <pre>{JSON.stringify(device, null, 2) }</pre>
    </h3>
    <p><strong>Check the logs in the Console (F12)</strong></p>.
  </div>
)

export default withConnect(Home)
