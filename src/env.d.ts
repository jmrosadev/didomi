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
    placeholder?: string
  }
  export interface IconButtonProps extends EventCapture {
    placeholder?: string
  }
  export interface CardProps extends EventCapture {
    placeholder?: string
  }
  export interface CardBodyProps extends EventCapture {
    placeholder?: string
  }
  export interface CardFooterProps extends EventCapture {
    placeholder?: string
  }
  export interface TypographyProps extends EventCapture {
    placeholder?: string
  }
  export interface ListProps extends EventCapture {
    placeholder?: string
  }
  export interface ListItemProps extends EventCapture {
    placeholder?: string
  }
  export interface ListItemPrefixProps extends EventCapture {
    placeholder?: string
  }
}
