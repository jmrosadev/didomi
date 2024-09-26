import { ThemeProvider } from '@material-tailwind/react'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Router } from './router'

import './index.css'

const root = document.getElementById('root')
ReactDOM
  .createRoot(root as HTMLElement)
  .render(
    <React.StrictMode>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </React.StrictMode>,
  )
