import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import style from './style.css'

class Header extends PureComponent {
  render () {
    const { pathname } = this.props.location

    const isHome = pathname === '/'
    const isJustAnotherPage = pathname === '/reviews'

    return (
      <header className={style.wrapper}>
        <ul>
          <li className={isHome ? style.active : ''}>
            {isHome ? 'Home' : <Link to='/'>Home</Link>}
          </li>
          <li className={isJustAnotherPage ? style.active : ''}>
            { isJustAnotherPage ? 'Reviews' : <Link to='/reviews'>Reviews</Link> }
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
