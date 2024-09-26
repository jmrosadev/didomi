import type { ConsentType } from '@/types'
import { getConsents } from '@/api/consents'
import { CustomError } from '@/components/Error'
import { Pagination } from '@/components/Pagination'
import { Skeleton } from '@/components/Skeleton'
import { Table } from '@/components/Table'
import { DEFAULT_PAGINATION_LIMIT } from '@/constants'
import lang from '@/locales/en-US.json'

import {
  Card,
  CardBody,
} from '@material-tailwind/react'
import { useQuery } from '@tanstack/react-query'

import { useSearchParams } from 'react-router-dom'

export function Consents() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = searchParams.get('page')
  const currentPage = page ? Number.parseInt(page, 10) : 1

  const { data: payload, isError, error, isLoading } = useQuery({
    queryKey: ['consents', { page: currentPage }],
    queryFn: async () => await getConsents({ page: currentPage }),
  })

  if (isError) {
    return <CustomError error={error.message} />
  }

  if (isLoading) {
    return (
      <div className="space-y-4 loading">
        <Card className="h-full w-full border border-blue-gray-100">
          <CardBody className="p-0">
            <Table>
              <Table.Header columns={[lang.name.label, lang.email.label, lang.agreements.label]} />
              <Table.Body>
                {Array.from({ length: DEFAULT_PAGINATION_LIMIT }).map((_, id) => (
                  <Table.Row key={id}>
                    <Table.Cell><Skeleton /></Table.Cell>
                    <Table.Cell><Skeleton /></Table.Cell>
                    <Table.Cell><Skeleton /></Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </CardBody>
        </Card>
      </div>
    )
  }

  const handleClickPage = (page: number) => setSearchParams({ page: page.toString() })

  return (
    <div className="space-y-4">
      <Card className="h-full w-full border border-blue-gray-100">
        <CardBody className="p-0">
          <Table>
            <Table.Header columns={[lang.name.label, lang.email.label, lang.agreements.label]} />
            <Table.Body>
              {payload && payload.data.map((consent: ConsentType) => (
                <Table.Row key={consent.id}>
                  <Table.Cell>{consent.name}</Table.Cell>
                  <Table.Cell>{consent.email}</Table.Cell>
                  <Table.Cell>{consent.agreements}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </CardBody>
      </Card>

      <Pagination
        pages={payload.metadata.totalPages}
        total={payload.metadata.total}
        currentPage={payload.metadata.currentPage}
        onClickPage={handleClickPage}
      />
    </div>
  )
}
