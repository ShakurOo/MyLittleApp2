import styled from 'styled-components'

const Wrapper = styled.footer`
  border-top: solid 1px #e1e1e1;
  margin-top: 60px;
  text-align: left;
  padding: 15px 0;
  position: relative;
  width: 100%;

  .author {
    color: #e1e1e1;
    position: absolute;
    right: 0;
    top: 10px;

    & > a {
      display: inline-block;
      margin-left: 7px;
      vertical-align: middle;

      & > img {
        height: auto;
        width: 30px;
      }
    }
  }
`

export { Wrapper }
