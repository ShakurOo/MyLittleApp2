import React from 'react'
import LoaderIcon from './assets/loader.gif'
import { Wrapper } from './style'

const Loader = () => (
  <Wrapper>
    { LoaderIcon && <img src={LoaderIcon} alt='Loader' /> }
  </Wrapper>
)

export default Loader
