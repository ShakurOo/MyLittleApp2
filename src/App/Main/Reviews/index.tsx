// @flow
import React, { Component } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Review, Reviews as ReviewsType } from '@app/types'
import withConnect from './connector'
import style from './style.css'

const scrollToBottomPage = () => {
  window.scrollTo(0, document.body.scrollHeight)
}

interface ReviewsProps extends RouteComponentProps {
  reviews: ReviewsType,
  onGetReview: { (): void }
}
class Reviews extends Component<ReviewsProps> {
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
        <p>The list of available reviews</p>

        <h3>What happened when you clicks on LOAD MORE REVIEW ?</h3>
        <p className={style.head}>
          The inital reviews comes from the initial state of the <strong>reviews reducer</strong> (mock). However, <strong>this button triggers a XHR call which returns a new review</strong>.
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
                <p
                  className={style.review}
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </section>
            ))}
        </div>

        { reviews.length <= 10 && (
          <div className={style.wrapperLoadMore}>
            <button
              onClick={onGetReview}
              type='button'
            >
              Load more review
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
