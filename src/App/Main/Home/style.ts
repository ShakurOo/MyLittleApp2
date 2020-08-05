import styled from 'styled-components'

const Wrapper = styled.div`

  .logo, h1 {
    display: inline-block;
    vertical-align: middle;
  }

  .logo {
    height: auto;
    margin-right: 10px;
    width: 75px;
  }

  .wrapperButton, .wrapperResult {
    display: inline-block;
    vertical-align: middle;
  }

  .wrapperButton {
    padding-right: 40px;
    width: 200px;

    button {
      width: 100%;
    }

    p {
      color: #ff7c81;
      text-align: center;
    }
  }

  .wrapperResult {
    border-left: solid 1px #e1e1e1;
    padding-left: 40px;
    width: calc(100% - (200px + 1px + 80px));
  }

  pre {
    background-color: #fef2c0;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 15px 20px;
  }
`

export { Wrapper }