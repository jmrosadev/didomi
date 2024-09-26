import type { ConsentType } from '@/types'
import type { Dispatch } from 'react'
import { DEFAULT_PAGINATION_LIMIT } from '@/constants'
import { ConsentsActions, type ReducerConsentsActionType, useConsents } from '@/contexts/consents'
import hyperid from 'hyperid'

const instance = hyperid()

interface CreateConsentProps { body: ConsentType, dispatch: Dispatch<ReducerConsentsActionType> }
function createConsent({ body, dispatch }: CreateConsentProps) {
  const consent = {
    ...body,
    id: instance.uuid,
  }

  dispatch({
    type: ConsentsActions.SAVE_CONSENT,
    payload: consent,
  })

  return new Response(new Blob([JSON.stringify(consent)]), {
    status: 200,
    headers: new Headers(
      [
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
      ],
    ),
    statusText: 'Success',
  })
}

interface GetConsentProps { consents: ConsentType[], page: number }
function getConsents({ consents, page = 1 }: GetConsentProps) {
  const totalPages = Math.ceil(consents.length / DEFAULT_PAGINATION_LIMIT)

  if (page > totalPages || page < 1) {
    throw new Error('404')
  }

  const startIndex = (page - 1) * DEFAULT_PAGINATION_LIMIT
  return new Response(
    new Blob(
      [JSON.stringify({
        data: consents.slice(
          startIndex,
          startIndex + DEFAULT_PAGINATION_LIMIT,
        ),
        metadata: {
          total: consents.length,
          currentPage: page,
          perPage: DEFAULT_PAGINATION_LIMIT,
          totalPages,
        },
      })],
      { type: 'application/json' },
    ),
    {
      status: 200,
      headers: new Headers(
        [
          ['Content-Type', 'application/json'],
          ['Accept', 'application/json'],
        ],
      ),
      statusText: 'Success',
    },
  )
}

export function useFetch() {
  const { state, dispatch } = useConsents()

  window.fetch = async (
    url: string | URL | globalThis.Request,
    options?: RequestInit,
  ) => {
    return new Promise((resolve, reject) => {
      if (
        (typeof url === 'string' && !url.startsWith('/todos'))
        || (typeof url !== 'string' && !url.toString().startsWith('/todos'))
      ) {
        return reject(new Response(null, {
          status: 404,
          headers: new Headers(),
        }))
      }

      if (options?.method === undefined || !['GET', 'POST'].includes(options?.method)) {
        return reject(new Response(null, {
          status: 405,
          headers: new Headers(),
          statusText: 'KO',
        }))
      }

      if (options?.method === 'POST') {
        return resolve(createConsent({ body: options.body as unknown as ConsentType, dispatch }))
      }

      const urlParsed = new URLSearchParams(url.toString().split('?')[1])
      const page = urlParsed.get('page')
      try {
        const res = getConsents({
          consents: state.consents,
          page: page ? Number.parseInt(page) : 1,
        })

        return resolve(res)
      }
      catch (error) {
        return reject(new Response(null, {
          status: Number.parseInt(error.message, 10),
          headers: new Headers(),
          statusText: 'KO',
        }))
      }
    })
  }
}
