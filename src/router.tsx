import { createElement } from 'react'
import { createBrowserRouter, Navigate, Outlet, type RouteObject, RouterProvider } from 'react-router-dom'

export const routes: RouteObject[] = [
  {
    id: 'root',
    path: '/',
    Component: () => <Outlet />,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true,
        element: <Navigate replace to="/give-consent" />,
      },
      {
        path: '/give-consent',
        Component: () => <p>Give Consent</p>,
      },
      {
        path: '/consents',
        Component: () => <p>Consents</p>,
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
