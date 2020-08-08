import React, { lazy, Suspense, useEffect, useCallback, useReducer } from 'react'
import { Switch as RouterSwitch, withRouter } from 'react-router-dom'
import ReviewsContext from '@app/store/context/reviews'
import reviewsReducer, { initialState } from '@app/store/reducers/reviews'
import {
  GET_REVIEW,
  onReviewFetched,
  onReviewFetchError,
  onReviewFetchStarted
} from '@app/store/actions'
import axiosInstance, {
  axiosRequest,
  AxiosResponse
} from '@app/api'
import { REVIEWS_ENDPOINT } from '@app/constants'
import type { Action } from '@app/store'
import type { Review } from '@app/types'
import Footer from './Common/Footer'
import { Wrapper } from './style'

const Header = lazy(() => import(/* webpackChunkName: "header" */ './Common/Header'))

const HeaderWithRouter = withRouter((
  props: { location: Location }
): JSX.Element => (
  <Suspense fallback={'Please Wait'}>
    <Header {...props} />
  </Suspense>
))

interface MainProps {
  children: RouterSwitch
}

const Main: React.SFC<MainProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reviewsReducer, initialState);

  const fetchReview = useCallback((): void => {
    dispatch(onReviewFetchStarted())

    axiosInstance({ endpoint: REVIEWS_ENDPOINT })
      .get('api')
      .then(({ data }: AxiosResponse<Review>) => {
        dispatch(onReviewFetched(data))
      })
      .catch((error: Error) => {
        dispatch(onReviewFetchError(error.message))
      })
  }, [])

  const customDispatch = useCallback((action: Action): void => {
    switch (action.type) {
      case GET_REVIEW:
        fetchReview()
        break
      default:
        dispatch(action)
    }
  }, [fetchReview])

  useEffect((): { (): void } => {
    fetchReview()

    return (): void => {
      axiosRequest && axiosRequest.cancel()
    }
  }, [fetchReview])

  return (
    <Wrapper>
      <ReviewsContext.Provider value={{
        state,
        dispatch: customDispatch
      }}>
        <HeaderWithRouter />

        <div>
          { children }
        </div>
      </ReviewsContext.Provider>

      <Footer />

    </Wrapper>
  )
}

export default Main
