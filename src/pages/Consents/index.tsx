import { Pagination } from '@/components/Pagination'
import { Table } from '@/components/Table'
import { DEFAULT_PAGINATION_LIMIT } from '@/constants'
import lang from '@/locales/en-US.json'

import {
  Card,
  CardBody,
} from '@material-tailwind/react'

import { useSearchParams } from 'react-router-dom'

export function Consents() {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page')
  const currentPage = page ? Number.parseInt(page, 10) : 1

  return (
    <div className="space-y-4">
      <Card className="h-full w-full border border-blue-gray-100">
        <CardBody className="p-0">
          <Table>
            <Table.Header columns={[lang.name.label, lang.email.label, lang.agreements.label]} />
            <Table.Body>
              <Table.Row>
                <Table.Cell>Text</Table.Cell>
                <Table.Cell>Text</Table.Cell>
                <Table.Cell>Text</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </CardBody>
      </Card>

      <Pagination
        pages={5}
        perPage={DEFAULT_PAGINATION_LIMIT}
        total={10}
        currentPage={currentPage}
        onClickPage={() => {}}
      />
    </div>
  )
}
