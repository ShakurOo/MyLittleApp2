import React from 'react'
import { Router, Route } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import history from '../hashHistory'
import Main from './Main'

const App = ({ store }) => (
  <StoreProvider store={store}>
    <Router history={history}>
      <Route component={Main} />
    </Router>
  </StoreProvider>
)

export default App
