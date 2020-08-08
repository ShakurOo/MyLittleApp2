import React from 'react'
import MeilleurevilleIMG from './assets/mv-icon.png'
import { Wrapper } from './style'

const Footer: React.SFC = () => (
  <Wrapper>
    <p>Copyright © 2019-2020 MyLittleApp</p>
    <p className='author'>KP
      { MeilleurevilleIMG && (
        <a
          href="https://www.meilleureville.com"
          title="Visit www.meilleureville.com"
          rel="noreferrer"
          target="_blank"
        >
          <img src={MeilleurevilleIMG} />
        </a>
      ) }
    </p>
  </Wrapper>
)

export default Footer
