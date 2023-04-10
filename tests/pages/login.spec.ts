import { expect, test } from '@playwright/test';

test.describe('Login integration test case', () => {
	test('Display errors on each field if user has submitted without filling each one.', async ({
		page
	}) => {
		await page.goto('http://localhost:5173/login');
		await page.locator('data-test-id=submitButton').click();

		await expect(page.locator('data-test-id=emailErrors')).toHaveText('Email ingresado no valido');
		await expect(page.locator('data-test-id=passwordErrors')).toHaveText('Campo requerido');
	}),
		test('Display external error if user does not  exists.', async ({ page }) => {
			await page.goto('http://localhost:5173/login');

			await page.locator('data-test-id=emailField').fill('test@gmail.com');
			await page.locator('data-test-id=passwordField').fill('test123*');
			await page.locator('data-test-id=submitButton').click();

			await expect(page.locator('data-test-id=externalErrors')).toHaveText(
				'Este usuario no existe o las credenciales ingresadas son incorrectas.'
			);
		});
	test('Display external error if user credentials does not match.', async ({ page }) => {
		await page.goto('http://localhost:5173/login');

		await page.locator('data-test-id=emailField').fill('o.gonzalo@hotmail.com');
		await page.locator('data-test-id=passwordField').fill('test123*');
		await page.locator('data-test-id=submitButton').click();

		await expect(page.locator('data-test-id=externalErrors')).toHaveText(
			'Las credenciales ingresadas son incorrectas.'
		);
	});
});
