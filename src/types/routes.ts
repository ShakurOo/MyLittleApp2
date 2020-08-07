type AddReviewComponentPromise = Promise<typeof import('@app/App/Main/AddReview')>
export type HomeComponentPromise = Promise<typeof import('@app/App/Main/Home')>
type ReviewsComponentPromise = Promise<typeof import('@app/App/Main/Reviews')>

export type ComponentPromise =  AddReviewComponentPromise | HomeComponentPromise | ReviewsComponentPromise

export interface RouteParams {
  Component: ComponentPromise,
  exact: boolean,
  name: string,
  path: string
}

export type RoutesParams = Array<RouteParams>
