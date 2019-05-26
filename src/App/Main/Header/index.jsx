import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

class Header extends PureComponent {
  render () {
    const { pathname } = this.props.location

    const isHome = pathname === '/'
    const isJustAnotherPage = pathname === '/page-bis'

    return (
      <header className={style.globalHeader}>
        <ul>
          <li className={isHome ? style.active : ''}>
            {isHome ? 'Home' : <Link to='/'>Home</Link>}
          </li>
          <li className={isJustAnotherPage ? style.active : ''}>
            { isJustAnotherPage ? 'Page Bis' : <Link to='/page-bis'>Page Bis</Link> }
          </li>
        </ul>
      </header>
    );
  }
}

export default Header
