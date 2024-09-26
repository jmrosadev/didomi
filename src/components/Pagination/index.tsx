import lang from '@/locales/en-US.json'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Button, IconButton } from '@material-tailwind/react'

export interface PaginationProps {
  pages: number
  total: number
  currentPage: number
  onClickPage: (page: number) => void
}

const isActive = (index: number, currentPage: number) => index + 1 === currentPage

export function Pagination({ pages, total, currentPage, onClickPage }: PaginationProps) {
  if (!pages || !total) {
    return null
  }

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={() => onClickPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
        {' '}
        {lang.pagination.previous}
      </Button>

      <div className="grow flex items-center gap-2 justify-center">
        {Array.from({ length: pages }).map((_, index) => (
          <IconButton key={index} variant={isActive(index, currentPage) ? 'filled' : 'text'} onClick={() => onClickPage(index + 1)} color="gray">{index + 1}</IconButton>
        ))}
      </div>

      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={() => onClickPage(currentPage + 1)}
        disabled={currentPage === pages}
      >
        {lang.pagination.next}
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  )
}
