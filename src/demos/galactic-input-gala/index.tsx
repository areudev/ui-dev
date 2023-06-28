import { useReducer, useState } from 'react'
import { Label } from '../../components/label'
import { Input } from '../../components/input'
import { Frame } from '../../components/frame'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '../../components/select'

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
	const [file, setFile] = useState<File | null>(null)

	return (
		<Frame className="mt-8">
			<div className="grid grid-cols-2 gap-4">
				<div className="flex items-center gap-4  p-2">
					<Label className="min-w-min flex-shrink-0" htmlFor="deep-thought">
						<p>Deep Thought</p>
					</Label>
					<Input
						placeholder="Some text..."
						id="deep-thought"
						value={text}
						onChange={e => setText(e.target.value)}
						data-testid="text-input"
					/>
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p data-testid="text-result">{text}</p>
				</div>
				<div className=" items-center p-2">
					<Select>
						<SelectTrigger>
							<SelectValue placeholder="Favorite Rick and Morty Character" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectLabel>Rick and Morty Characters</SelectLabel>
								{rickAndMortyCharacters.map(character => (
									<SelectItem key={character} value={character}>
										{character}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
			</div>
		</Frame>
	)
}

export default GalacticInputGala
