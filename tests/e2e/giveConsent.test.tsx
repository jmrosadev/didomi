import { expect, test } from '@playwright/test'

test('User create a consent and it\'s redirected to /consents', async ({ page }) => {
  await page.goto('/give-consent')

  await page.fill('input[name="name"]', 'John Doe')
  await page.fill('input[name="email"]', 'jhon@doe.com')
  await page.check('input[value="newsletter"]')
  await page.check('input[value="ads"]')
  await page.click('button[type="submit"]')

  await expect(page).toHaveURL('/consents')
})

test('User create a consent and consent exists in /consents', async ({ page }) => {
  await page.goto('/give-consent')

  await page.fill('input[name="name"]', 'John Doe')
  await page.fill('input[name="email"]', 'jhon.doe@gmail.com')
  await page.check('input[value="newsletter"]')
  await page.check('input[value="ads"]')
  await page.click('button[type="submit"]')

  await page.locator('.pages button').last().click()

  await page.waitForSelector('.loading', { state: 'hidden' })

  const cell = await page.locator('table tbody tr td:nth-child(2)')

  await expect(cell).toHaveText('jhon.doe@gmail.com')
})
