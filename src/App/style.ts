import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    min-height: 100%;
  }

  body {
    overflow-x: hidden;
    position: relative;
  }

  #wrapper {
    _width: 991px;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1220px;
    min-width: 970px;
  }
`
export { GlobalStyle }
