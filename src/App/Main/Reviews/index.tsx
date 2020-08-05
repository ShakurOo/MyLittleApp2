import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import type { Review, Reviews as ReviewsType } from '@app/types'
import withConnect from './connector'
import { Wrapper } from './style'

const scrollToBottomPage = () => {
  window.scrollTo(0, document.body.scrollHeight)
}

interface ReviewsProps {
  reviews: ReviewsType,
  onGetReview: { (): void }
}
class Reviews extends Component<RouteComponentProps, ReviewsProps> {
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
      <Wrapper>
        <h1>Reviews list</h1>
        <p>The list of available reviews</p>

        <h3>What happened when you clicks on LOAD MORE REVIEW ?</h3>
        <p className='head'>
          The inital reviews comes from the initial state of the <strong>reviews reducer</strong> (mock). However, <strong>this button triggers a XHR call which returns a new review</strong>.
          In other words, each time the button is clicked, a new dynamic review aggregate the existing reviews list.
        </p>

        <button
          className='light'
          type='button'
        >
          <Link to='/add-review'>Add your own review</Link>
        </button>
        <p className='limit'>
          Reviews quantity limit: <span>10</span>
        </p>
        <br />
        <br />

        <div className='wrapperReviews'>
          { reviews
            .filter(review => !review.isPrivate)
            .map(({ author, time, text }: Review, i: number) => (
              <section key={`${time}-${i}`} className='review'>
                <span className='sticker'>
                  { i + 1 }
                </span>
                <h2 className='author'>{ author || 'Unknown' }</h2>
                <p className='time'>at: { time }</p>
                <p
                  className='review'
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </section>
            ))}
        </div>

        { reviews.length <= 10 && (
          <div className='wrapperLoadMore'>
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
      </Wrapper>
    )
  }
}

export default withConnect(Reviews)
