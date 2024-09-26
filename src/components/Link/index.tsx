import { NavLink, type NavLinkProps } from 'react-router-dom'

interface LinkProps {
  to: string
}

export function Link({ children, ...props }: LinkProps & NavLinkProps) {
  return (
    <NavLink
      {...props}
    >
      {children}
    </NavLink>
  )
}
