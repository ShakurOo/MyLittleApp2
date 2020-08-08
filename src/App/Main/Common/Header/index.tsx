import React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { ROUTES } from '@app/constants'
import type { RouteParams } from '@app/types'
import welcomeImage from './assets/hello-lbc.png'
import { NavItem, Wrapper } from './style'

interface HeaderProps extends RouteComponentProps {
  location: Location
}
const Header: React.SFC<HeaderProps> = ({
  location: { pathname }
}) => (
  <Wrapper>
    <div className='content'>
      <ul className='nav'>
        { ROUTES.map(({ name, path }: RouteParams): JSX.Element => {
            const isActive: boolean = pathname === path
            return (
              <NavItem isActive={isActive} key={name}>
                { isActive
                  ? name
                  : <Link to={path}>{ name }</Link>
                }
              </NavItem>
            )
        }) }
      </ul>

      { welcomeImage && <img src={welcomeImage} alt='Hello LBC' /> }
    </div>
  </Wrapper>
)

export default Header
