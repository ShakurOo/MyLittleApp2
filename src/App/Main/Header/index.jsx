import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import helloIMG from './assets/hello-lbc.png'
import style from './style.css'

class Header extends PureComponent {
  render () {
    const { pathname } = this.props.location

    const isHome = pathname === '/'
    const isReviews = pathname === '/reviews'
    const isAddReview = pathname === '/add-review'

    return (
      <header className={style.wrapper}>
        <div className={style.content}>
          <ul className={style.nav}>
            <li className={isHome ? style.active : ''}>
              {isHome ? 'Home' : <Link to='/'>Home</Link>}
            </li>
            <li className={isReviews ? style.active : ''}>
              { isReviews ? 'Reviews' : <Link to='/reviews'>Reviews</Link> }
            </li>
            <li className={isAddReview ? style.active : ''}>
              { isAddReview ? 'Add review' : <Link to='/add-review'>Add review</Link> }
            </li>
          </ul>
          <img src={helloIMG} alt='Hello LBC' />
        </div>
      </header>
    )
  }
}

export default Header
