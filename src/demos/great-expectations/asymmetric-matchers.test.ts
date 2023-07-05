import { v4 as id } from 'uuid'
import { expect, it } from 'vitest'

type RickAndMortyCharacter = {
	id: string
	firstName: string
	lastName: string
	isAdventurer?: boolean
}

const createCharacter = (
	firstName: string,
	lastName: string,
): RickAndMortyCharacter => ({ id: 'rm-' + id(), firstName, lastName })

const addToAdventurersClub = (c: RickAndMortyCharacter, club: unknown[]) => {
	club.push({ ...c, isAdventurer: true })
}

it('includes adventurous Rick and Morty characters by virtue of them being in the club', () => {
	const characters: RickAndMortyCharacter[] = []

	addToAdventurersClub(createCharacter('Rick', 'Sanchez'), characters)
	addToAdventurersClub(createCharacter('Morty', 'Smith'), characters)
	addToAdventurersClub(createCharacter('Summer', 'Smith'), characters)
	addToAdventurersClub(createCharacter('Beth', 'Smith'), characters)

	for (const character of characters) {
		expect(typeof character.firstName).toBe('string')
		expect(typeof character.lastName).toBe('string')
		expect(character.isAdventurer).toBe(true)
	}

	for (const character of characters) {
		expect(character).toEqual({
			id: expect.stringMatching(/^rm-/),
			firstName: expect.any(String),
			lastName: expect.any(String),
			isAdventurer: true,
		})
	}

	for (const character of characters) {
		expect(character).toEqual(
			expect.objectContaining({
				isAdventurer: expect.any(Boolean),
			}),
		)
	}
})
