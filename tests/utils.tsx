import { routes } from '@/router'

import { render } from '@testing-library/react'

import { createMemoryRouter, RouterProvider } from 'react-router-dom'

export function navigateTo(path: string) {
  const r = createMemoryRouter(routes, {
    initialEntries: [path],
  })

  render(<RouterProvider router={r} />)
}
