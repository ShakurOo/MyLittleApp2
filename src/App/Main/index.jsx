import React, { lazy, Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Chunk from 'components/Chunk'
import Home from './Home'
import style from './style.css'

const Header = lazy(() => import(/* webpackChunkName: "header" */ './Header'))
const loadReviewsPage = () => import(/* webpackChunkName: "reviews-page" */ './Reviews')

// This show case how you can access routing info in your component
const HeaderWithRouter = withRouter((props) => (
  <Suspense fallback={null}>
    <Header {...props} />
  </Suspense>
))

const Main = () => (
  <div className={style.wrapper}>
    <HeaderWithRouter />
    <div className={style.content}>
      <Switch>
        <Route
          exact
          path='/'
          component={Home}
        />
        <Route
          path='/reviews'
          component={props => (
            <Chunk {...props} load={loadReviewsPage} />
          )}
        />
        <Route
          path='*'
          component={Home}
        />
      </Switch>
    </div>
  </div>
)

export default Main
