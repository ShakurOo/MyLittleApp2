// @flow
import React, { Component } from 'react'
import { type ReviewForm } from 'types'
import style from './style'
import withConnect from './connector'

type Props = {|
  +onValidReview: () => Review
|}

type State = {|
  +formValues: ReviewForm,
  +isFormValid: boolean
|}

class AddReview extends Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      formValues: {
        confidentiality: 'public',
        username: '',
        review: ''
      },
      isFormValid: false
    }
  }

  onSubmit = (event: Event): void => {
    event.preventDefault()
    console.log('onSubmit', this.state.formValues)

    //this.props.onValidReview()
  }

  onConfidentialityChange = (event: Event): void => {
    this.setState({
      formValues: {
        ...this.state.formValues,
        confidentiality: event.target.value
      }
    })
  }

  onReviewChange = (event: Event): void => {
    const review: string = event.target.value
    const { formValues: { username } } = this.state

    this.setState({
      formValues: {
        ...this.state.formValues,
        review
      },
      isFormValid: Boolean(
        username.length && review.length && review.length >= 50
      )
    })
  }

  onUsernameChange = (event: Event): void => {
    const username: string = event.target.value
    const { formValues: { review } } = this.state

    this.setState({
      formValues: {
        ...this.state.formValues,
        username
      },
      isFormValid: Boolean(
        review.length && username.length && username.length >= 5
      )
    })
  }

  render () {
    const { formValues: { confidentiality, username, review }, isFormValid } = this.state
    return (
      <div className={style.wrapper}>
        <h1>Add your review Cowboy</h1>

        <form name='addReview' onSubmit={this.onSubmit}>
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
          <div className={style.wrapperConfidentiality}>
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

          <button type='submit' disabled={!isFormValid}>
            Confirm my review
          </button>
        </form>
      </div>
    )
  }
}

export default withConnect(AddReview)
