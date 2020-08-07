import type { RoutesParams } from '@app/types'

export const routes: RoutesParams = [
  {
    Component: import(/* webpackChunkName: "home-page" */ '@app/App/Main/Home'),
    exact: true,
    name: 'Home',
    path: '/'
  },
  {
    Component: import(/* webpackChunkName: "home-page" */ '@app/App/Main/Reviews'),
    exact: false,
    name: 'Reviews',
    path: '/reviews'
  },
  {
    Component: import(/* webpackChunkName: "home-page" */ '@app/App/Main/Home'),
    exact: false,
    name: 'Add review',
    path: '/add-review'
  }
]