// @flow
import React from 'react'
// import type { Device } from 'types'
import withConnect from './connector'
import style from './style'

type Review = any

type ReviewsType = Array<Review>;

type Props = {|
  +reviews: ReviewsType,
  +onGetReview: () => void
|}

const Reviews = ({ reviews, onGetReview }: Props) => (
  <div className={style.wrapper}>
    <h1>Reviews list</h1>
    <p>
      <strong>The inital reviews comes from reducer</strong> where the data is static. However, <strong>the button bellow triggers a XHR call which returns a new review</strong>.
      In other words, each time the button is clicked, a new dynamic review aggregate the existing reviews list.
    </p>
    <br />

    <ul>
      { reviews.map((review: Review, i: number) => (
        <li key={i}>
          { review.name }
        </li>
      ))}
    </ul>

    <div className={style.wrapperLoadMore}>
      <button onClick={onGetReview} type='button'>
        Load additional review
      </button>
    </div>
  </div>
)

Reviews.defaultProps = {
  reviews: []
}

export default withConnect(Reviews)
