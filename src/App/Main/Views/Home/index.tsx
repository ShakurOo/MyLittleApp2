import React, { useMemo, useReducer } from 'react'
import { onGetDevice } from './actions/device'
import LogoIMG from './assets/logo.png'
import deviceReducer, { initialState } from './reducers/device'
import { Wrapper } from './style'

const Home: React.SFC<{}> = () => {
  const [device, dispatch] = useReducer(deviceReducer, initialState)

  return useMemo((): JSX.Element => (
    <Wrapper>
      { LogoIMG && (
        <img
          alt='MyLittleApp logo'
          className='logo'
          src={LogoIMG}
        />
      ) }
      <h1>Welcome in MyLittleApp</h1>

      <h3>Basic data flow example</h3>

      <p>Explanation :</p>
      <ul>
        <li>Button component trigger an event (redux action)</li>
        <li>The action is handled by a middleware (Epic)</li>
        <li>The middleware produce a side-effect as trigger a new action including in payload the correct device data</li>
        <li>A reducer catch this action and populate the store</li>
        <li>A selector (getter), detects the change, compute the newest value</li>
        <li>Finally, the prop is updated, the connected component is rerendered through the inner component lifecycle mechanisme</li>
      </ul>

      <h3>Demo for device prop :</h3>

      <div className='wrapperButton'>
        <button
          disabled={Boolean(device.interface)}
          onClick={(): void => {
            dispatch(onGetDevice())
          }}
          type='button'
        >
          Get Device info
        </button>
        <p>Check the logs in the Console (F12)</p>
      </div>

      <div className='wrapperResult'>
        <pre>{ JSON.stringify(device, null, 2) }</pre>
      </div>
    </Wrapper>
  ), [device])
}

export default Home
