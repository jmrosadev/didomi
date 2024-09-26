import type { PropsWithChildren } from 'react'
import {
  Card,
  List,
  ListItem,
  Typography,
} from '@material-tailwind/react'
import { Link } from '../Link'

export function Menu({ children }: PropsWithChildren) {
  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 rounded-none">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Menu
        </Typography>
      </div>

      <List>
        {children}
      </List>
    </Card>
  )
}

interface MenuItemProps {
  to: string
  text: string
}

export function MenuItem({ to, text }: MenuItemProps) {
  return (
    <Link to={to}>
      {({ isActive }) => (
        <ListItem selected={isActive} className="py-8">
          {text}
        </ListItem>
      )}
    </Link>
  )
}

Menu.item = MenuItem
