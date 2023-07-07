import { test, expect } from '@playwright/test'

test('it has an input for pokemons', async ({ page }) => {
	await page.goto('http://localhost:5173/pokemon')
	const searchInput = page.getByPlaceholder('Search for a pokemon')
	await searchInput.type('pikachu')
	await page.waitForSelector('text=pikachu')
	const pikachuLink = page.getByRole('button', { name: 'pikachu' })
	await pikachuLink.click()
	expect(page.url()).toBe('http://localhost:5173/pokemon/25')
})
