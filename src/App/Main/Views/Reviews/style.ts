import styled from 'styled-components'

const Wrapper = styled.div`
  .head {
    margin-bottom: 50px;

    & + button {
      float: left;
    }
  }

  .limit {
    float: right;

    span {
      color: #ff7c81;
    }
  }

  .wrapperReviews {
    margin-top: 20px;

    .review {
      border-top: solid 1px #e1e1e1;
      padding: 30px 0;

      .sticker, .author, .time {
        display: inline-block;
        vertical-align: middle;
      }

      .sticker {
        background-color: #fef2c0;
        border-radius: 8px;
        font-size: 1.5rem;
        height: 45px;
        margin-right: 15px;
        line-height: 2.6rem;
        text-align: center;
        width: 48px;
      }

      .author {
        margin-right: 5px;

        &::first-letter {
          text-transform: capitalize;
        }
      }

      .time {
        color: grey;
        position: relative;
        top: 2px;
      }

      .review::first-letter {
        text-transform: capitalize;
      }
    }
  }

  .wrapperLoadMore {

    button {
      margin-right: 15px;
    }
  }
`

export { Wrapper }