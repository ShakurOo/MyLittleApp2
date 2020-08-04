import type { Action, ActionType } from '@app/store'

export const isActionType = (type: ActionType, action: Action): boolean => (
  action.type === type
)
