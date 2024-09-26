/// <reference types="vite/client" />
import {} from '@material-tailwind/react'

// Issue reference: https://github.com/creativetimofficial/material-tailwind/issues/651
interface EventCapture {
  onPointerEnterCapture?: unknown
  onPointerLeaveCapture?: unknown
}

declare module '@material-tailwind/react' {
  export interface InputProps extends EventCapture {
    crossOrigin?: unknown
  }
  export interface CheckboxProps extends EventCapture {
    crossOrigin?: unknown
  }
  export interface ButtonProps extends EventCapture {
    crossOrigin?: unknown
    placeholder?: string
    children?: ReactNode
  }
  export interface CardProps extends EventCapture {
    crossOrigin?: unknown
    placeholder?: string
  }
  export interface TypographyProps extends EventCapture {
    crossOrigin?: unknown
    placeholder?: string
  }
  export interface ListProps extends EventCapture {
    crossOrigin?: unknown
    placeholder?: string
  }
  export interface ListItemProps extends EventCapture {
    crossOrigin?: unknown
    placeholder?: string
  }
  export interface ListItemPrefixProps extends EventCapture {
    crossOrigin?: unknown
    placeholder?: string
  }
}
