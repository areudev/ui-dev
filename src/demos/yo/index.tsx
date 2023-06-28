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

type Topping = keyof typeof toppingsState
type Beatle = (typeof migos)[number]

const toppingsReducer = (
	toppings: Record<Topping, boolean> = toppingsState,
	action: { topping: Topping; checked: boolean },
) => {
	return { ...toppings, [action.topping]: action.checked }
}

const isTopping = (topping: string): topping is Topping => {
	return toppings.includes(topping)
}

const GalacticInputGala = () => {
	const [text, setText] = useState('')
	const [favoriteCharacter, setFavoriteCharacter] = useState(
		rickAndMortyCharacters[0],
	)
	const [toppings, dispatch] = useReducer(toppingsReducer, toppingsState)
	const [favoriteBeatle, setFavoriteBeatle] = useState(migos[0])
	const [color, setColor] = useState('#FF0000')
	const [rating, setRating] = useState('4')
	const [date, setDate] = useState('2023-03-23')

	return <div className="grid grid-cols-2 gap-4"></div>
}

export default GalacticInputGala
