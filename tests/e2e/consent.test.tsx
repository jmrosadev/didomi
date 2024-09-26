import { DEFAULT_PAGINATION_LIMIT } from '@/constants'

import { expect, test } from '@playwright/test'

test('Consents page show first page', async ({ page }) => {
  await page.goto('/consents')

  await page.waitForSelector('.loading', { state: 'hidden' })

  expect(await page.locator('.pages button').first()).toHaveText('1')
})

test(`Consents page show ${DEFAULT_PAGINATION_LIMIT} consents`, async ({ page }) => {
  await page.goto('/consents')

  await page.waitForSelector('.loading', { state: 'hidden' })

  const rows = await page.locator('table tbody tr').count()

  expect(rows).toBe(DEFAULT_PAGINATION_LIMIT)
})

test(`Consents show error page for a wrong page`, async ({ page }) => {
  await page.goto('/consents?page=999')

  await page.waitForSelector('.loading', { state: 'hidden' })

  await expect(page.getByRole('heading', { level: 3 })).toHaveText('Ops! Something happened !')
})
