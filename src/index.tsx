import { ConsentsProvider } from '@/contexts/consents'
import { MOCK_DATA } from '@/mocks'

import { ThemeProvider } from '@material-tailwind/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './router'
import './index.css'

const queryClient = new QueryClient()

const root = document.getElementById('root')
ReactDOM
  .createRoot(root as HTMLElement)
  .render(
    <React.StrictMode>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ConsentsProvider consents={MOCK_DATA}>
            <Router />
          </ConsentsProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </React.StrictMode>,
  )
