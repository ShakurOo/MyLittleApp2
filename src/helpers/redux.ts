// @flow
import type { Action, ActionType } from 'store'

export const isActionType = (type: ActionType, action: Action): boolean => (
  action.type === type
)
