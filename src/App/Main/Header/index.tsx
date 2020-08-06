import React, { PureComponent } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import welcomeImage from './assets/hello-lbc.png'
import { NavItem, Wrapper } from './style'
class Header extends PureComponent<RouteComponentProps> {
  render () {
    const { pathname } = this.props.location

    const isHome = pathname === '/'
    const isReviews = pathname === '/reviews'
    const isAddReview = pathname === '/add-review'

    return (
      <Wrapper>
        <div className='content'>
          <ul className='nav'>

            <NavItem isHome={isHome}>
              {isHome ? 'Home' : <Link to='/'>Home</Link>}
            </NavItem>
            <NavItem isReviews={isReviews}>
              { isReviews ? 'Reviews' : <Link to='/reviews'>Reviews</Link> }
            </NavItem>
            <NavItem isAddReview={isAddReview}>
              { isAddReview ? 'Add review' : <Link to='/add-review'>Add review</Link> }
            </NavItem>
          </ul>

          { welcomeImage && <img src={welcomeImage} alt='Hello LBC' /> }
        </div>
      </Wrapper>
    )
  }
}

export default Header
