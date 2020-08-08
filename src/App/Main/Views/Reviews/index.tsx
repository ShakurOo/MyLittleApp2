import React, { useContext, useEffect, useMemo } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'
import { onGetReview } from '@app/store/actions/reviews'
import ReviewsContext from '@app/store/context/reviews'
import { RoutesPaths } from '@app/constants'
import type { Review, Reviews as ReviewsType } from '@app/types'
import { Wrapper } from './style'

const AddReviewButton = (): JSX.Element => (
  <Link to={RoutesPaths.ADD_REVIEW}>
    <button
      className='light'
      type='button'
    >
      Add your own review
    </button>
  </Link>
)

const scrollToBottomPage = (): void => {
  window.scrollTo(0, document.body.scrollHeight)
}

const Reviews: React.SFC<RouteComponentProps> = ({ location, history }) => {
  const { state: { list: reviews }, dispatch } = useContext(ReviewsContext)

  const canShowLoadMore = useMemo((): boolean => (
    reviews.length < 10
  ), [reviews.length])

  const publicReviews = useMemo((): ReviewsType => (
    reviews.filter(review => !review.isPrivate)
  ), [reviews])

  useEffect((): void => {
    if (location.search.includes('newReview')) {
      scrollToBottomPage()

      history.replace({ search: '' })
    }
  }, [location, history])

  useEffect(() => {
    if (document as Document) {
      document.title = `List of available reviews (${reviews.length})`
    }
  }, [reviews.length])

  return useMemo(() => (
    <Wrapper>
      <h1>Reviews list</h1>
      <p>The list of available reviews</p>

      <h3>What happened when you clicks on LOAD MORE REVIEW ?</h3>
      <p className='head'>
        The inital reviews comes from the initial state of the <strong>reviews reducer</strong> (mock). However, <strong>this button triggers a XHR call which returns a new review</strong>.
        In other words, each time the button is clicked, a new dynamic review aggregate the existing reviews list.
      </p>

      <AddReviewButton />

      <p className='limit'>
        Reviews quantity limit: <span>10</span>
      </p>
      <br />
      <br />

      <div className='wrapperReviews'>
        { publicReviews.map(({ author, time, text }: Review, i: number): JSX.Element => (
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
            onClick={(): void => { dispatch(onGetReview()) }}
            type='button'
          >
            Load more review
          </button>

          <AddReviewButton />
        </div>
      )}
    </Wrapper>
  ), [canShowLoadMore, dispatch, publicReviews])
}

export default Reviews
