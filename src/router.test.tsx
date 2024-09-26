import { screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { navigateTo } from '../tests/utils'

vi.mock('@/pages/GiveConsent', () => ({
  GiveConsent: () => {
    return <h6>GiveConsent</h6>
  },
  Consents: () => {
    return <h6>Consents</h6>
  },
}))

vi.mock('@/pages/Consents', () => ({
  Consents: () => {
    return <h6>Consents</h6>
  },
}))

vi.mock('@/pages/NotFound', () => ({
  NotFound: () => {
    return <h6>Not Found</h6>
  },
}))

describe('router', () => {
  it('should render the home page for /', () => {
    navigateTo('/')

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('GiveConsent')
  })

  it('should render the home page for /give-consent', () => {
    navigateTo('/give-consent')

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('GiveConsent')
  })

  it('should render the home page for /consents', () => {
    navigateTo('/consents')

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Consents')
  })

  it('should render the not found page for invalid routes', () => {
    navigateTo('/invalid-route')

    expect(screen.getByRole('heading', { level: 6 })).toHaveTextContent('Not Found')
  })
})
