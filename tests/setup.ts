import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'
import '@testing-library/jest-dom/vitest'

function mockAnimations() {
  Element.prototype.animate = vi.fn().mockImplementation(() => ({ finished: Promise.resolve() }))
}

beforeEach(() => mockAnimations())

afterEach(() => cleanup())
