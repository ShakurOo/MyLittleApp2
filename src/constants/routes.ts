import type { RoutesParams } from '@app/types'

export enum RoutesPaths {
  ADD_REVIEW = '/add-review',
  HOME = '/',
  REVIEWS = '/reviews'
}

export const routes: RoutesParams = [
  {
    Component: import(/* webpackChunkName: "home-page" */ '@app/App/Main/Home'),
    exact: true,
    name: 'Home',
    path: RoutesPaths.HOME
  },
  {
    Component: import(/* webpackChunkName: "reviews-page" */ '@app/App/Main/Reviews'),
    exact: false,
    name: 'Reviews',
    path: RoutesPaths.REVIEWS
  },
  {
    Component: import(/* webpackChunkName: "review-page" */ '@app/App/Main/AddReview'),
    exact: false,
    name: 'Add review',
    path: RoutesPaths.ADD_REVIEW
  }
]