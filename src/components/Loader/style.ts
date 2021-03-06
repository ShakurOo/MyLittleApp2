import styled from 'styled-components'

const Wrapper = styled.div`
  bottom: 0;
  display: inline-block;
  text-align: center;
  top: 50%;
  height: 100%;
  position: absolute;
  width: 100%;

  & > img {
    height: 64px;
    width: 64px;
    transform: translateY(-50%);
  }
`

export { Wrapper }
