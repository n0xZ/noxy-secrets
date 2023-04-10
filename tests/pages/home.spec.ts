import { test, expect } from '@playwright/test';

test('Homepage test integration', async ({ page }) => {
	await page.goto('http://localhost:5173');
	await expect(page).toHaveTitle('Bienvenido a Noxy - secrets!');
});
