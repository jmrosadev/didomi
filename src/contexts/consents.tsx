import type { ConsentType } from '@/types'
import { MOCK_DATA } from '@/mocks'
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
  consents: MOCK_DATA,
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
}>({
  state: initialState,
  dispatch: () => null,
})

export function ConsentsProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

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
