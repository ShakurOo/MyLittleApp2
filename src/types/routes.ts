type AddReviewComponentPromise = Promise<typeof import('@app/App/Main/Views/AddReview')>
export type HomeComponentPromise = Promise<typeof import('@app/App/Main/Views/Home')>
type ReviewsComponentPromise = Promise<typeof import('@app/App/Main/Views/Reviews')>

export type ComponentPromise =  AddReviewComponentPromise | HomeComponentPromise | ReviewsComponentPromise

export interface RouteParams {
  Component: ComponentPromise,
  exact: boolean,
  name: string,
  path: string
}

export type RoutesParams = Array<RouteParams>
