import { Typography } from '@material-tailwind/react'

export function Skeleton() {
  // return <p className="animate-pulse text-gray-700 block w-full h-2 text-base bg-gray-300 rounded-full">&nbsp;</p>
  return (
    <Typography
      as="span"
      variant="paragraph"
      className="mb-2 h-2 w-72 rounded-full bg-gray-300"
    >
        &nbsp;
    </Typography>
  )
}
