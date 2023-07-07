import { test, expect } from '@playwright/test'

test('it records at cursor', async ({ page }) => {
	await page.goto('http://localhost:5173/')
	await page.getByTestId('text-input').click()
	await page.getByTestId('text-input').fill('deep thought')
	await page.getByRole('button', { name: 'Increment' }).click({
		clickCount: 5,
	})
	await page.getByRole('button', { name: 'Reset' }).click()
	await page.getByTestId('checkbox-onions').click()
	await page.getByTestId('checkbox-sausage').click()
	await page
		.getByTestId('range-input')
		.getByRole('slider', { name: 'slider' })
		.click()
	await page.getByPlaceholder('New Item').click()
	await page.getByPlaceholder('New Item').fill('hello from playwright')
	await page.getByPlaceholder('New Item').press('Enter')
	await page.getByRole('checkbox', { name: 'hello from playwright' }).click()
	await page.getByRole('button', { name: 'Edit hello from playwright' }).click()
	await page.getByTestId('packed-items-list').getByRole('textbox').click()
	await page
		.getByTestId('packed-items-list')
		.getByRole('textbox')
		.press('ArrowLeft')
	await page
		.getByTestId('packed-items-list')
		.getByRole('textbox')
		.press('ArrowLeft')
	await page
		.getByTestId('packed-items-list')
		.getByRole('textbox')
		.fill('hello from yo playwright')
	await page
		.getByRole('button', { name: 'Edit hello from yo playwright' })
		.click()
})
