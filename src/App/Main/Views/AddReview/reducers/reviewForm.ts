import { scriptHTMLTagRegex } from '@app/helpers/regex'
import type { Action, ReviewFormValues } from '@app/types'
import { Confidentiality } from '@app/types'
import {
  FORM_AUTHOR_CHANGED,
  FORM_CONFIDENTIALITY_CHANGED,
  FORM_TEXT_CHANGED
} from '../actions/reviewForm'

export const MIN_TEXT_LENGTH = 50

export interface ReviewFormState {
  formValues: ReviewFormValues,
  isPristine: boolean,
  isValid: boolean
}

export const initialState: ReviewFormState = {
  formValues: {
    author: '',
    confidentiality: Confidentiality.PUBLIC,
    review: ''
  },
  isPristine: true,
  isValid: false
}

const reviewFormReducer = (
  state: ReviewFormState,
  action: Action
): ReviewFormState => {
  switch (action.type) {
    case FORM_CONFIDENTIALITY_CHANGED: {
      const { confidentiality } = action.payload
      const isValid = Boolean(confidentiality.length)

      return {
        formValues: {
          ...state.formValues,
          confidentiality
        },
        isPristine: false,
        isValid
      }
    }

    case FORM_TEXT_CHANGED: {
      const { review } = action.payload
      const isValid = Boolean(review.length && review.length >= MIN_TEXT_LENGTH)
      const sanatizedReview = review.replace(scriptHTMLTagRegex, '')

      return {
        formValues: {
          ...state.formValues,
          review: sanatizedReview
        },
        isPristine: false,
        isValid
      }
    }

    case FORM_AUTHOR_CHANGED: {
      const { author } = action.payload
      const isValid = Boolean(author.length)
      const sanatizedAuthor = author.replace(scriptHTMLTagRegex, '')

      return {
        formValues: {
          ...state.formValues,
          author: sanatizedAuthor
        },
        isPristine: false,
        isValid
      }
    }

    default:
      return state
  }
}

export default reviewFormReducer
