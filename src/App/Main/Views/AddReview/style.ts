import styled from 'styled-components'

const AddReviewFormWrapper = styled.form`
  margin-top: 60px;

  .info {
    color: #e1e1e1;
    display: block;
    font-size: .75rem;
    margin-bottom: -25px;
    margin-top: 0;
    text-align: right;
    width: 380px;
  }

  .wrapperConfidentiality {
    margin-bottom: 25px;

    & > label {
      margin-left: 5px;
      margin-right: 15px;
      position: relative;
      top: 2px;
    }
  }
`

export { AddReviewFormWrapper }
