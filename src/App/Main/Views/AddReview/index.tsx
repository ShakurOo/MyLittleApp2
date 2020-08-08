import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer
} from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { onAddReview } from '@app/store/actions/reviews'
import ReviewsContext from '@app/store/context/reviews'
import { RoutesPaths } from '@app/constants'
import type { ReviewFormValues } from '@app/types'
import { Confidentiality } from '@app/types'
import {
  onFormAuthorChanged,
  onFormConfidentialityChanged,
  onFormTextChanged
} from './actions/reviewForm'
import reviewFormReducer, {
  initialState as initialReviewFormState,
  MIN_TEXT_LENGTH
} from './reducers/reviewForm'
import { AddReviewFormWrapper } from './style'

const AddReview: React.SFC<RouteComponentProps> = ({ history }) => {
  const [
    { formValues, isPristine, isValid }, dispatch
  ] = useReducer(reviewFormReducer, initialReviewFormState)
  const { dispatch: reviewsDispatch } = useContext(ReviewsContext)

  const isValidForm = useMemo(() => (
    isPristine || !isValid
  ), [isPristine, isValid])

  const handleSubmit = useCallback((
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault()

    reviewsDispatch(onAddReview(formValues as ReviewFormValues))

    history.push({
      pathname: RoutesPaths.REVIEWS,
      search: '?newReview=true'
    })
  }, [formValues, history, reviewsDispatch])

  useEffect(() => {
    if (document as Document) {
      document.title = 'Add your own review'
    }
  }, [])

  return (
    <div>
      <h1>Add your review Cowboy</h1>
      <p>This page allows you adding a review.</p>

      <h3>What happened when you clicks on SUBMIT ?</h3>
      <p>The form values is passed through an action and intercepted by the <strong>reviews epic</strong> which dispatch another action depending on specific statements.</p>
      <p>For our case, this epic dispatch an <strong>action including the cleaned form values</strong>. This action is intercepted by the <strong>reviews reducer</strong> and this reducer update the store by adding your new review.</p>

      <AddReviewFormWrapper
        name='addReview'
        onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
          handleSubmit(event)
        }}
      >
        <input
          placeholder='Your name ?'
          type='text'
          value={formValues.author}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
            dispatch(onFormAuthorChanged(event.target.value))
          }}
        />

        <textarea
          placeholder='What is your review ?'
          value={formValues.review}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => {
            dispatch(onFormTextChanged(event.target.value as string))
          }}
        />
        <p className='info'>Minimum {MIN_TEXT_LENGTH} characters</p>

        <div className='wrapperConfidentiality'>
          <input
            checked={formValues.confidentiality === Confidentiality.PUBLIC}
            id='public'
            name='confidentiality'
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              dispatch(onFormConfidentialityChanged(event.target.value as Confidentiality.PUBLIC))
            }}
            type='radio'
            value={Confidentiality.PUBLIC}
          />
          <label htmlFor='public'>Public</label>
          <input
            checked={formValues.confidentiality === Confidentiality.PRIVATE}
            id='private'
            name='confidentiality'
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void => {
              dispatch(onFormConfidentialityChanged(event.target.value as Confidentiality.PRIVATE))
            }}
            type='radio'
            value={Confidentiality.PRIVATE}
          />
          <label htmlFor='private'>Private</label>
        </div>

        <button type='submit' disabled={isValidForm}>
          Confirm my review
        </button>
      </AddReviewFormWrapper>
    </div>
  )
}

export default AddReview