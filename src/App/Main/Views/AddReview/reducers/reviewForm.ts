import type { Action } from '@app/store'
import {
  FORM_AUTHOR_CHANGED,
  FORM_CONFIDENTIALITY_CHANGED,
  FORM_TEXT_CHANGED
} from '../actions/reviewForm'

export const MIN_TEXT_LENGTH = 50

export enum Confidentiality {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export interface ReviewFormState {
  formValues: {
    author: string,
    confidentiality: Confidentiality,
    review: string
  },
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

      return {
        formValues: {
          ...state.formValues,
          review
        },
        isPristine: false,
        isValid
      }
    }

    case FORM_AUTHOR_CHANGED: {
      const { author } = action.payload
      const isValid = Boolean(author.length)

      return {
        formValues: {
          ...state.formValues,
          author
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
