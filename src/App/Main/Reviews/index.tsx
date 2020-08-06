import React, { useEffect, useMemo } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { History } from 'history'
import type { Review, Reviews as ReviewsType } from '@app/types'
import withConnect from './connector'
import { Wrapper } from './style'

const scrollToBottomPage = (): void => {
  window.scrollTo(0, document.body.scrollHeight)
}
interface ReviewsProps extends RouteComponentProps {
  history: History,
  reviews: ReviewsType,
  onGetReview: { (): void }
}
const Reviews: React.SFC<ReviewsProps> = ({
  history,
  reviews,
  onGetReview
}) => {
  const canShowLoadMore = useMemo((): boolean => (
    reviews.length <= 10
  ), [reviews.length])

  const publicReviews = useMemo((): ReviewsType => (
    reviews.filter(review => !review.isPrivate)
  ), [reviews])

  useEffect((): void => {
    if (location.search.includes('newReview')) {
      scrollToBottomPage()

      history.replace({ search: '' })
    }
  }, [history])

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
        { publicReviews.map(({ author, time, text }: Review, i: number) => (
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

      { canShowLoadMore && (
        <div className='wrapperLoadMore'>
          <button
            onClick={onGetReview}
            type='button'
          >
            Load more review
          </button>

          <button
            className='light'
            type='button'
          >
            <Link to='/add-review'>Add your own review</Link>
          </button>
        </div>
      )}
    </Wrapper>
  )
}

export default withConnect(Reviews)
