import type { ConsentType, PaginationType } from '@/types'

export async function getConsents({ page }: PaginationType) {
  try {
    const res = await fetch(`/todos?page=${page}`, {
      method: 'GET',
    })

    return res.json()
  }
  catch {
    throw new Error('Error fetching consents')
  }
}

export async function createConsent(consent: ConsentType) {
  try {
    const res = await fetch('/todos', {
      method: 'POST',
      body: JSON.stringify(consent),
    })

    return res.json()
  }
  catch {
    throw new Error('Error creating consent')
  }
}
