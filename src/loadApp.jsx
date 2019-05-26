import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './store'
import App from './App'

const loadApplication = () => {
  const DOMElement = window.document.getElementById('wrapper')

  const render = Application => {
    ReactDOM.render(
      <Application store={store} />,
      DOMElement
    )
  }

  render(App)

  if (module.hot) {
    module.hot.accept('./App', () => { render(App) })
  }
}

loadApplication()

export { loadApplication }
