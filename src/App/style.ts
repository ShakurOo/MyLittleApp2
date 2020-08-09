import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  //
  // LAYOUT && BASE
  //
  html, body {
    color: #2b2b2b;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-style: normal;
    height: 100%;
    line-height: 22px;
    min-height: 100%;
  }

  body {
    overflow-x: hidden;
    position: relative;
  }

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  h3 {
    margin-top: 40px;
  }

  #wrapper {
    _width: 991px;
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 1220px;
    min-width: 970px;
  }

  //
  // BUTTONS
  //
  button {
    background-color: #ff7c81;
    border: none;
    border-radius: 6px;
    color: #ffffff;
    cursor: pointer;
    font-size: 1rem;
    padding: 10px 15px;

    &[disabled] {
      background-color: #e1e1e1;
      cursor: default;
      pointer-events: none;
    }

    &:hover {
      background-color: #ff5057;
    }

    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .light {
    background-color: #ffffff;
    border: solid 1px #e1e1e1;
    color: gray;

    &:hover {
      background-color: #ffffff;
      border-color: #2b2b2b;
      color: #2b2b2b;
    }
  }

  //
  // FORM
  //
  input[type='text'], textarea {
    background-color: #fef2c0;
    border-radius: 6px;
    border: none;
    display: block;
    font-size: 1rem;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
    margin-bottom: 20px;
    padding: 15px 15px;
    width: 350px;
  }

  textarea {
    min-height: 75px;
  }
`
export { GlobalStyle }
