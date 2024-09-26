import type { ConsentType } from '@/types'
import { createContext, type PropsWithChildren, useContext, useReducer } from 'react'

export interface State {
  consents: ConsentType[]
}

export enum ConsentsActions {
  SAVE_CONSENT = 'SAVE_CONSENT',
}

export interface Action<Type, Payload> {
  type: Type
  payload: Payload
}

export type ReducerConsentsActionType =
  Action<ConsentsActions.SAVE_CONSENT, ConsentType>

export const initialState: State = {
  consents: [],
}

export function reducer(state: State, action: ReducerConsentsActionType): State {
  switch (action.type) {
    case 'SAVE_CONSENT':
      return {
        ...state,
        consents: [...state.consents, action.payload],
      }
    default:
      return state
  }
}

export const ConsentsContext = createContext<{
  state: State
  dispatch: React.Dispatch<ReducerConsentsActionType>
} | undefined>(undefined)

export function ConsentsProvider({ children, consents }: PropsWithChildren<{ consents: ConsentType[] }>) {
  const [state, dispatch] = useReducer(reducer, { consents })

  return (
    <ConsentsContext.Provider value={{ state, dispatch }}>
      {children}
    </ConsentsContext.Provider>
  )
}

export function useConsents() {
  const context = useContext(ConsentsContext)

  if (context === undefined) {
    throw new Error('useConsents must be used within a ConsentsProvider')
  }
  return context
}
