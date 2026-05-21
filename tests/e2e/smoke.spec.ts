import { test, expect } from '@playwright/test';

test('has title and can navigate', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/HalalChain/);

  // Click on the launch console button.
  const launchButton = page.locator('text=Launch operations console');
  await launchButton.click();

  // Expects page to have navigated to the dashboard overview.
  await expect(page).toHaveURL(/.*\/app/);
  await expect(page.locator('h1')).toContainText('Operations Overview');
});

test('can view live tracking map', async ({ page }) => {
  await page.goto('/app/tracking');
  
  await expect(page.locator('h1')).toContainText('Live tracking');
  // Check if map container exists
  const mapContainer = page.locator('.leaflet-container');
  await expect(mapContainer).toBeVisible();
});
