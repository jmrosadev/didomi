import { HomeLayout } from '@/layouts/Home'
import { Consents } from '@/pages/Consents'

import { GiveConsent } from '@/pages/GiveConsent'
import { NotFound } from '@/pages/NotFound'

import { createElement } from 'react'
import { createBrowserRouter, Navigate, type RouteObject, RouterProvider } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: HomeLayout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate replace to="/give-consent" />,
      },
      {
        path: '/give-consent',
        Component: GiveConsent,
      },
      {
        path: '/consents',
        Component: Consents,
      },
    ],
  },
]

const router = createBrowserRouter(routes)

export function Router() {
  return createElement(
    RouterProvider,
    { router },
  )
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}
