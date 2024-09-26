import type { ConsentType } from '@/types'

import { MOCK_DATA } from '@/mocks'
import { render, renderHook, screen } from '@testing-library/react'

import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { ConsentsActions, ConsentsProvider, reducer, useConsents } from './consents'

describe('consents context', () => {
  it('should throw an error when used outside of ConsentsProvider', () => {
    expect.hasAssertions()

    const ce = vi.spyOn(console, 'error')
    ce.mockImplementation(() => {})

    try {
      renderHook(() => useConsents())
    }
    catch (error) {
      expect(error).toEqual(new Error('useConsents must be used within a ConsentsProvider'))
    }
  })

  it('should add a new consent when SAVE_CONSENT action is dispatched', () => {
    expect.hasAssertions()

    const newConsent: ConsentType = MOCK_DATA[0] as ConsentType
    const action = {
      type: ConsentsActions.SAVE_CONSENT,
      payload: newConsent,
    }

    const result = reducer({ consents: MOCK_DATA }, action)

    expect(result.consents).toHaveLength(MOCK_DATA.length + 1)
    expect(result.consents).toContain(newConsent)
  })

  it('should render the initial number of consents and update when a new consent is added', async () => {
    expect.hasAssertions()

    const user = userEvent.setup()

    render(<ConsentsProvider consents={MOCK_DATA}><TestComponent /></ConsentsProvider>)

    const consentsLength = screen.getByRole('paragraph')
    expect(consentsLength.textContent).toBe(String(MOCK_DATA.length))

    const addButton = screen.getByRole('button')
    await user.click(addButton)

    expect(consentsLength.textContent).toBe(String(MOCK_DATA.length + 1))
  })
})

function TestComponent() {
  const { state, dispatch } = useConsents()

  const handleAddConsent = () => {
    const newConsent: ConsentType = MOCK_DATA[0] as ConsentType
    dispatch({ type: ConsentsActions.SAVE_CONSENT, payload: newConsent })
  }

  return (
    <div>
      <p>{state.consents.length}</p>
      <button onClick={handleAddConsent}>Add Consent</button>
    </div>
  )
};
