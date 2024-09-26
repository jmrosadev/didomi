import type { PropsWithChildren } from 'react'
import { Typography } from '@material-tailwind/react'

export function Table({ children }: PropsWithChildren) {
  return (
    <table className="w-full min-w-max table-auto text-left">
      {children}
    </table>
  )
}

function TableHeader({
  columns,
}: { columns: string[] }) {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th
            key={column}
            className="border-b border-blue-gray-100 bg-blue-gray-50/50 p-4"
          >
            <Typography
              variant="small"
              color="blue-gray"
              className="font-semibold leading-none opacity-70"
            >
              {column}
            </Typography>
          </th>

        ))}
      </tr>
    </thead>
  )
}

function TableBody({
  children,
}: PropsWithChildren) {
  return <tbody>{children}</tbody>
}

function TableRow({
  children,
}: PropsWithChildren) {
  return <tr className="hover:bg-blue-gray-50">{children}</tr>
}

function TableCell({
  children,
}: PropsWithChildren) {
  return (
    <td className="p-4 border-b border-blue-gray-100">
      <Typography
        variant="small"
        color="blue-gray"
      >
        {children}
      </Typography>
    </td>
  )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell
