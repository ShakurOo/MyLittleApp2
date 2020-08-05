import React, { lazy, Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Chunk from '@app/components/Chunk'
import Footer from './Footer'
import { Wrapper } from './style'

const Header = lazy(() => import(/* webpackChunkName: "header" */ './Header'))
const loadHomePage = () => import(/* webpackChunkName: "home-page" */ './Home')
const loadReviewsPage = () => import(/* webpackChunkName: "reviews-page" */ './Reviews')
const loadAddReviewPage = () => import(/* webpackChunkName: "add-review-page" */ './AddReview')

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => (
  <Suspense fallback={null}>
    <Header {...props} />
  </Suspense>
))

const Main = () => (
  <Wrapper>
    <HeaderWithRouter />

    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={props => (
            <Chunk {...props} load={loadHomePage} />
          )}
        />
        <Route
          path='/reviews'
          component={props => (
            <Chunk {...props} load={loadReviewsPage} />
          )}
        />
        <Route
          path='/add-review'
          component={props => (
            <Chunk {...props} load={loadAddReviewPage} />
          )}
        />
        <Route
          path='*'
          component={props => (
            <Chunk {...props} load={loadHomePage} />
          )}
        />
      </Switch>
    </div>

    <Footer />
  </Wrapper>
)

export default Main
