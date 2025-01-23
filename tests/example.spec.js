// @ts-check
const { test, expect } = require('@playwright/test');

test('verify google title', async ({ page }) => {
  await page.goto(`${process.env.url}`);
});



