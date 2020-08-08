import React, { useMemo, useReducer } from 'react'
import {
  onFormAuthorChanged,
  onFormConfidentialityChanged,
  onFormTextChanged
} from './actions/reviewForm'
import reviewFormReducer, {
  Confidentiality,
  initialState,
  MIN_TEXT_LENGTH
} from './reducers/reviewForm'
import { AddReviewFormWrapper } from './style'

const AddReview: React.SFC<{}> = () => {
  const [
    { formValues, isPristine, isValid }, dispatch
  ] = useReducer(reviewFormReducer, initialState)

  const isValidForm = useMemo(() => (
    isPristine || !isValid
  ), [isPristine, isValid])

  return (
    <div>
      <h1>Add your review Cowboy</h1>
      <p>This page allows you adding a review.</p>

      <h3>What happened when you clicks on SUBMIT ?</h3>
      <p>The form values is passed through an action and intercepted by the <strong>reviews epic</strong> which dispatch another action depending on specific statements.</p>
      <p>For our case, this epic dispatch an <strong>action including the cleaned form values</strong>. This action is intercepted by the <strong>reviews reducer</strong> and this reducer update the store by adding your new review.</p>

      <AddReviewFormWrapper
        name='addReview'
        onSubmit={}
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