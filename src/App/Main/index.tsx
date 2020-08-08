import React, { lazy, Suspense, useEffect, useCallback, useReducer } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import ReviewsContext from '@app/store/context/reviews'
import reviewsReducer, { initialState } from '@app/store/reducers/reviews'
import Chunk from '@app/components/Chunk'
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
import { REVIEWS_ENDPOINT, ROUTES } from '@app/constants'
import type { Action } from '@app/store'
import type {
  ComponentPromise,
  HomeComponentPromise,
  Review,
} from '@app/types'
import Footer from './Common/Footer'
import { Wrapper } from './style'

const Header = lazy(() => import(/* webpackChunkName: "header" */ './Common/Header'))

const HeaderWithRouter = withRouter((props): JSX.Element => (
  <Suspense fallback={'Please Wait'}>
    <Header {...props} />
  </Suspense>
))

const Main = (): JSX.Element => {
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
          <Switch>
            { ROUTES.map(({ Component, exact, name, path }) => (
                <Route
                  {...exact && { exact }}
                  key={name}
                  path={path}
                  component={(props): JSX.Element => (
                    <Chunk {...props} load={(): ComponentPromise => Component} />
                  )}
                />
            ))}

            <Route
              path='*'
              component={(props): JSX.Element => (
                <Chunk {...props} load={(): HomeComponentPromise => ROUTES[0].Component} />
              )}
            />
          </Switch>
        </div>
      </ReviewsContext.Provider>

      <Footer />

    </Wrapper>
  )
}

export default Main
