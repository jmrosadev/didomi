import { expect, test } from '@playwright/test'

test('Home page is redirected to /give-consents', async ({ page }) => {
  await page.goto('')

  await expect(page).toHaveURL('/give-consent')
})
