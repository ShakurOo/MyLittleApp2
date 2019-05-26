// @flow
import React from 'react'
// import type { Device } from 'types'
import withConnect from './connector'
import style from './style'

type ReviewsType = Array<any>;

type Props = {|
  +reviews: ReviewsType,
|}

const Reviews = ({ reviews }: Props) => (
  <div className={style.wrapper}>
    <h1>Reviews list</h1>
    <br />

    <ul>
      { reviews.map((review, i) => (
        <li key={i}>
          { review.name }
        </li>
      ))}
    </ul>
  </div>
)

Reviews.defaultProps = {
  reviews: []
}

export default withConnect(Reviews)
