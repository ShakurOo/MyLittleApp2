import React, { Component } from 'react'
import type { Review, ReviewForm } from '@app/types'
import { AddReviewFormWrapper } from './style'
import withConnect from './connector'

interface AddReviewProps {
  onValidFormReview: {
    (formValues: ReviewForm): Review
  }
}

interface AddReviewState {
  formValues: ReviewForm,
  isValidForm: boolean
}

class AddReview extends Component<AddReviewProps, AddReviewState> {
  constructor (props: AddReviewProps) {
    super(props)

    this.state = {
      formValues: {
        confidentiality: 'public',
        username: '',
        review: ''
      },
      isValidForm: false
    }
  }

  isValidForm = ({ review, username }): boolean => Boolean(
    review.length &&
    review.length >= 50 &&
    username.length &&
    username.length >= 5
  )

  onSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()

    // Prevent script injection
    this.props.onValidFormReview(this.state.formValues)
  }

  onConfidentialityChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const confidentiality: any = event.target.value
    this.setState({
      formValues: {
        ...this.state.formValues,
        confidentiality
      }
    })
  }

  onReviewChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    const review: string = event.target.value
    const { formValues: { username } } = this.state
    const isValidForm = this.isValidForm({ username, review })

    this.setState({
      formValues: {
        ...this.state.formValues,
        review
      },
      isValidForm
    })
  }

  onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const username: string = event.target.value
    const { formValues: { review } } = this.state
    const isValidForm = this.isValidForm({ username, review })

    this.setState({
      formValues: {
        ...this.state.formValues,
        username
      },
      isValidForm
    })
  }

  render (): JSX.Element {
    const {
      formValues: { confidentiality, username, review },
      isValidForm
    } = this.state
    return (
      <div>
        <h1>Add your review Cowboy</h1>
        <p>This page allows you adding a review.</p>

        <h3>What happened when you clicks on SUBMIT ?</h3>
        <p>The form values is passed through an action and intercepted by the <strong>reviews epic</strong> which dispatch another action depending on specific statements.</p>
        <p>For our case, this epic dispatch an <strong>action including the cleaned form values</strong>. This action is intercepted by the <strong>reviews reducer</strong> and this reducer update the store by adding your new review.</p>

        <AddReviewFormWrapper
          name='addReview'
          onSubmit={this.onSubmit}
        >
          <input
            placeholder='Your username ?'
            type='text'
            value={username}
            onChange={this.onUsernameChange}
          />

          <textarea
            placeholder='What is your review ?'
            value={review}
            onChange={this.onReviewChange}
          />

          <div className='wrapperConfidentiality'>
            <input
              checked={confidentiality === 'public'}
              id='public'
              name='confidentiality'
              onChange={this.onConfidentialityChange}
              type='radio'
              value='public'
            />
            <label htmlFor='public'>Public</label>
            <input
              checked={confidentiality === 'private'}
              id='private'
              name='confidentiality'
              onChange={this.onConfidentialityChange}
              type='radio'
              value='private'
            />
            <label htmlFor='private'>Private</label>
          </div>

          <button type='submit' disabled={!isValidForm}>
            Confirm my review
          </button>
        </AddReviewFormWrapper>
      </div>
    )
  }
}

export default withConnect(AddReview)
