import React, { useContext } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import ReviewsContext from '@app/store/context/reviews'
import { ROUTES, RoutesPaths } from '@app/constants'
import type { Reviews, RouteParams } from '@app/types'
import welcomeImage from './assets/hello-lbc.png'
import { NavItem, Wrapper, WrapperBadge } from './style'

const ReviewsBadge: React.SFC<{ reviews: Reviews }> = React.memo(({ reviews }) => {
  const reviewLength = reviews.length

  return reviewLength && (
    <WrapperBadge>
      { reviewLength }
    </WrapperBadge>
  )
})

interface HeaderProps extends RouteComponentProps {
  location: Location
}
const Header: React.SFC<HeaderProps> = ({
  location: { pathname }
}) => {
  const {
    state: { isFetched, list: reviews }
  } = useContext(ReviewsContext)

  return (
    <Wrapper>
      <div className='content'>
        <ul className='nav'>
          { ROUTES.map(({ name, path }: RouteParams): JSX.Element => {
            const isActive: boolean = pathname === path
            return (
              <React.Fragment key={name}>
                <NavItem isActive={isActive}>
                  { isActive
                    ? <span>{ name }</span>
                    : <Link to={path}>{ name }</Link>
                  }

                  { isFetched && path === RoutesPaths.REVIEWS && (
                    <ReviewsBadge reviews={reviews} />
                  )}
                </NavItem>
              </React.Fragment>
            )
          }) }
        </ul>

        { welcomeImage && <img src={welcomeImage} alt='Hello LBC' /> }
      </div>
    </Wrapper>
  )
}

ReviewsBadge.displayName = 'ReviewsBadge'

export default Header
