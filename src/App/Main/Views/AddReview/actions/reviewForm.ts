import type { ActionType, BasicAction } from '@app/store'
import { Confidentiality } from '@app/types'

export interface FormTextChangedAction extends BasicAction {
  type: 'FORM_TEXT_CHANGED',
  payload: {
    review: string
  }
}

export const FORM_TEXT_CHANGED: ActionType = 'FORM_TEXT_CHANGED'

interface OnFormTextChanged {
  (review: string): FormTextChangedAction
}
export const onFormTextChanged: OnFormTextChanged = review => ({
  type: 'FORM_TEXT_CHANGED',
  payload: { review }
})

// /////////////////
export interface FormConfidentialityChangedAction extends BasicAction {
  type: 'FORM_CONFIDENTIALITY_CHANGED',
  payload: {
    confidentiality: Confidentiality
  }
}

export const FORM_CONFIDENTIALITY_CHANGED: ActionType = 'FORM_CONFIDENTIALITY_CHANGED'

interface OnFormConfidentialityChanged {
  (confidentiality: Confidentiality): FormConfidentialityChangedAction
}
export const onFormConfidentialityChanged: OnFormConfidentialityChanged = confidentiality => ({
  type: 'FORM_CONFIDENTIALITY_CHANGED',
  payload: { confidentiality }
})

// /////////////////
export interface FormAuthorChangedAction extends BasicAction {
  type: 'FORM_AUTHOR_CHANGED',
  payload: {
    author: string
  }
}

export const FORM_AUTHOR_CHANGED: ActionType = 'FORM_AUTHOR_CHANGED'

interface OnFormAuthorChanged {
  (author: string): FormAuthorChangedAction
}
export const onFormAuthorChanged: OnFormAuthorChanged = author => ({
  type: 'FORM_AUTHOR_CHANGED',
  payload: { author }
})