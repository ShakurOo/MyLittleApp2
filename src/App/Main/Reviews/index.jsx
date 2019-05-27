// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import type { Reviews as ReviewsType } from 'types'
import withConnect from './connector'
import style from './style'

const scrollToBottomPage = () => { window.scrollTo(0, document.body.scrollHeight) }

type Props = {|
  +reviews: ReviewsType,
  +onGetReview: () => void
|}
class Reviews extends Component<Props> {
  static defaultProps = {
    reviews: []
  }

  componentDidMount () {
    const { history, location } = this.props

    if (location.search.includes('newReview')) {
      scrollToBottomPage()
      history.replace({ search: '' })
    }
  }

  render () {
    const { reviews, onGetReview } = this.props

    return (
      <div className={style.wrapper}>
        <h1>Reviews list</h1>
        <p className={style.head}>
          <strong>The inital reviews comes from reducer</strong> where the data is static. However, <strong>the button bellow triggers a XHR call which returns a new review</strong>.
          In other words, each time the button is clicked, a new dynamic review aggregate the existing reviews list.
        </p>
        <button
          type='button'
          className='light'
        >
          <Link to='/add-review'>Add your own review</Link>
        </button>
        <p className={style.limit}>
          Reviews quantity limit: <span>10</span>
        </p>
        <br />
        <br />

        <div className={style.wrapperReviews}>
          { reviews
            .filter(review => !review.isPrivate)
            .map(({ author, time, text }: Review, i: number) => (
              <section key={`${time}-${i}`} className={style.review}>
                <span className={style.sticker}>
                  { i + 1 }
                </span>
                <h2 className={style.author}>{ author || 'Unknown' }</h2>
                <p className={style.time}>at: { time }</p>
                <p dangerouslySetInnerHTML={{ __html: text }} />
              </section>
            ))}
        </div>

        { reviews.length <= 10 && (
          <div className={style.wrapperLoadMore}>
            <button
              onClick={onGetReview}
              type='button'
            >
              Load additional review
            </button>

            <button
              type='button'
              className='light'
            >
              <Link to='/add-review'>Add your own review</Link>
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default withConnect(Reviews)
