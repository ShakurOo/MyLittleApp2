import { scriptHTMLTagRegex } from '@app/helpers/regex'
import type { Action, ReviewFormValues } from '@app/types'
import { Confidentiality } from '@app/types'
import {
  FORM_AUTHOR_CHANGED,
  FORM_CONFIDENTIALITY_CHANGED,
  FORM_TEXT_CHANGED
} from '../actions/reviewForm'

export const MIN_TEXT_LENGTH = 50

const isAuthorValid = (author: string): boolean => Boolean(author.length)
const isTextAreaValid = (review: string): boolean => Boolean(review.length && review.length >= MIN_TEXT_LENGTH)

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

      return {
        ...state,
        formValues: {
          ...state.formValues,
          confidentiality
        },
        isPristine: false
      }
    }

    case FORM_TEXT_CHANGED: {
      const { review } = action.payload
      const sanatizedReview = review.replace(scriptHTMLTagRegex, '')
      const isValid = isAuthorValid(state.formValues.author) && isTextAreaValid(sanatizedReview)

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
      const sanatizedAuthor = author.replace(scriptHTMLTagRegex, '')
      const isValid = isTextAreaValid(state.formValues.review) && isAuthorValid(sanatizedAuthor)

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
