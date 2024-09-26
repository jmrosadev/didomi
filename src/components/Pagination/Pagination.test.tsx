import lang from '@/locales/en-US.json'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import { Pagination } from './index'

describe('pagination component', () => {
  const onClick = vi.fn()

  beforeEach(() => {
    render(
      <Pagination
        pages={3}
        total={15}
        currentPage={1}
        onClickPage={onClick}
      />,
    )
  })

  it('should not render a component', () => {
    expect.hasAssertions()

    const { container } = render(
      <Pagination
        pages={0}
        total={0}
        currentPage={1}
        onClickPage={onClick}
      />,
    )

    expect(container.firstChild).toBeNull()
  })

  it('should render previous and next button', () => {
    expect.hasAssertions()

    expect(screen.getByRole('button', { name: lang.pagination.previous })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: lang.pagination.next })).toBeInTheDocument()
  })

  it('should render 3 pages buttons', () => {
    expect.hasAssertions()

    const buttons = screen.getAllByRole('button').map(button => button.textContent)

    expect(buttons).toEqual(expect.arrayContaining(['1', '2', '3']))
  })

  it('should show the current page activated', () => {
    expect.hasAssertions()

    expect(screen.getByRole('button', { name: '1' })).toHaveClass('bg-gray-900 text-white')
  })

  it('should fire an event when user click in a page', async () => {
    expect.hasAssertions()
    const user = userEvent.setup()

    const button = screen.getByRole('button', { name: '1' })
    await user.click(button)

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
