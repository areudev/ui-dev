import { test, expect } from '@playwright/test'

test('it has an input for pokemons', async ({ page }) => {
	await page.goto('http://localhost:5173/pokemon')
	const input = page.getByPlaceholder('Search for a pokemon')
	await input.type('pikachu')
	await page.waitForSelector('text=pikachu')
	const pikachuButton = page.getByRole('button', { name: 'pikachu' })
})
