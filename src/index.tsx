import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const loadApplication = (): void => {
  const DOMElement: HTMLElement = window.document.getElementById('wrapper')

  const render = (Application: React.SFC<{}>): void => {
    ReactDOM.render(
      <Application />, DOMElement
    )
  }

  render(App)
}

loadApplication()

export { loadApplication }
