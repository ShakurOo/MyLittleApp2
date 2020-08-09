import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import Chunk from '@app/components/Chunk'
import { ROUTES } from '@app/constants'
import type { ComponentPromise, HomeComponentPromise } from '@app/types'
import history from '../hashHistory'
import Main from './Main'
import { GlobalStyle } from './style'

const App: React.SFC<{}> = () => (
  <React.Fragment>
    <GlobalStyle />
    <Router history={history}>
      <Main>

        <Switch>
          { ROUTES.map(({ Component, exact, name, path }) => (
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
              <Chunk {...props} load={(): HomeComponentPromise => ROUTES[0].Component} />
            )}
          />
        </Switch>

      </Main>
    </Router>
  </React.Fragment>
)

export default App
