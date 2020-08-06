import * as React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import Main from './Main'
import { GlobalStyle } from './style'
import history from '../hashHistory'
import { store } from '../store'

const App: React.SFC<{}> = () => (
  <StoreProvider store={store}>
    <GlobalStyle />
    <Router history={history}>
      <Route component={Main} />
    </Router>
  </StoreProvider>
)

export default App
