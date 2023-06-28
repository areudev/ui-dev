import { useReducer, useState } from 'react'

const rickAndMortyCharacters = [
	'Rick Sanchez',
	'Morty Smith',
	'Summer Smith',
	'Beth Smith',
	'Jerry Smith',
	'Mr. Meeseeks',
	'Birdperson',
] as const

const toppingsState = {
	pepperoni: false,
	mushrooms: false,
	onions: false,
	sausage: false,
	extraCheese: false,
	pineapple: false,
}

const toppings = Object.keys(toppingsState)

const migos = ['Quavo', 'Offset', 'Takeoff']
