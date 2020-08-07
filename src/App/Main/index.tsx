import React, { lazy, Suspense } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Chunk from '@app/components/Chunk'
import { routes } from '@app/constants'
import type { HomeComponentPromise, ComponentPromise } from '@app/types'
import Footer from './Footer'
import { Wrapper } from './style'

const Header = lazy(() => import(/* webpackChunkName: "header" */ './Header'))

const HeaderWithRouter = withRouter((props): JSX.Element => (
  <Suspense fallback={'Please Wait'}>
    <Header {...props} />
  </Suspense>
))

const Main = (): JSX.Element => (
  <Wrapper>
    <HeaderWithRouter />

    <div>
      <Switch>
        { routes.map(({ Component, exact, name, path }) => (
            <Route
              {...exact && { exact }}
              key={name}
              path={path}
              component={(props): JSX.Element => (
                <Chunk {...props} load={(): ComponentPromise => Component} />
              )}
            />
        ))}

        <Route
          path='*'
          component={(props): JSX.Element => (
            <Chunk {...props} load={(): HomeComponentPromise => routes[0].Component} />
          )}
        />
      </Switch>
    </div>

    <Footer />
  </Wrapper>
)

export default Main
