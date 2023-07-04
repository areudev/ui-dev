import { useReducer, useState } from 'react'
import { Label } from '../../components/label'
import { Input } from '../../components/input'
import { Frame } from '../../components/frame'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '$components/select'
import { Checkbox } from '$components/checkbox'
import { RadioGroupItem, RadioGroup } from '$components/radio'
import { Slider } from '$components/slider'
import { DatePicker } from '$components/date-picker'

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

const migos = ['Quavo', 'Offset', 'Takeoff']

type Topping = keyof typeof toppingsState

const toppingsReducer = (
	toppings: Record<Topping, boolean> = toppingsState,
	action: { topping: Topping; checked: boolean },
) => {
	return { ...toppings, [action.topping]: action.checked }
}

const GalacticInputGala = () => {
	const [text, setText] = useState('')
	const [favoriteCharacter, setFavoriteCharacter] =
		useState<string>('Jerry Smith')
	const [toppings, dispatch] = useReducer(toppingsReducer, toppingsState)
	const [favoriteBeatle, setFavoriteBeatle] = useState('')
	const [color, setColor] = useState('#38bdf8')
	const [rating, setRating] = useState([4])
	const [date, setDate] = useState<Date>()
	const [file, setFile] = useState<string>('')

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
					<p data-testid="text-result">{text || 'nothing deep here yet'}</p>
				</div>
				<div className="items-center">
					<Select onValueChange={v => setFavoriteCharacter(v)}>
						<SelectTrigger title="Favorite Rick and Morty Character">
							<SelectValue placeholder="Favorite Rick and Morty Character" />
						</SelectTrigger>
						<SelectContent>
							{rickAndMortyCharacters.map(character => (
								<SelectItem key={character} value={character}>
									{character}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p data-testid="select-result">{favoriteCharacter || 'No one'}</p>
				</div>
				<div className="flex flex-col justify-center gap-2 p-2">
					{Object.keys(toppingsState).map(topping => (
						<div className="flex items-center gap-2" key={topping}>
							<Checkbox
								id={topping.toLocaleUpperCase()}
								aria-label={topping}
								checked={toppings[topping as Topping]}
								onCheckedChange={(checked: boolean) =>
									dispatch({
										topping: topping as Topping,
										checked,
									})
								}
								data-testid={`checkbox-${topping.toLocaleLowerCase()}`}
							/>
							<Label htmlFor={topping.toLocaleUpperCase()}>
								{topping.toLocaleUpperCase()}
							</Label>
						</div>
					))}
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p className="text-center" data-testid="checkbox-result">
						Pizza with:{' '}
						{Object.keys(toppings)
							.filter(topping => toppings[topping as Topping])
							.join(', ') || 'No Pizza'}
					</p>
				</div>
				<div className="flex flex-col gap-2 p-2">
					<h3>Favorite Beatle</h3>
					<RadioGroup
						onValueChange={v => {
							setFavoriteBeatle(v)
						}}
						className=""
						id="beatles"
					>
						{migos.map(beatle => (
							<div key={beatle} className="flex items-center gap-2">
								<RadioGroupItem
									aria-label={beatle}
									value={beatle}
									id={beatle}
								/>
								<Label htmlFor={beatle}>{beatle}</Label>
							</div>
						))}
					</RadioGroup>
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p data-testid="radio-result">{favoriteBeatle || 'No one'}</p>
				</div>
				<div className="flex gap-2 items-center p-2">
					<Label className="min-w-min flex-shrink-0" htmlFor="color">
						Favorite Color
					</Label>
					<Input
						type="color"
						id="color"
						value={color}
						onChange={e => setColor(e.target.value)}
						data-testid="color-input"
					/>
				</div>
				<div
					className="flex items-center justify-around gap-2 border-2 p-2"
					style={{
						backgroundColor: color,
						color: color > '#888888' ? '#000000' : '#ffffff',
					}}
					data-testid="color-container"
				>
					<p className="font-bold" data-testid="color-result">
						{color}
					</p>
				</div>
				<div className="flex flex-col gap-4 items-center p-2">
					<Label htmlFor="rating">Rating</Label>
					<Slider
						id="rating"
						name="rating"
						min={0}
						max={10}
						defaultValue={rating}
						onValueChange={v => setRating(v)}
						data-testid="range-input"
					/>
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p data-testid="range-result">{rating}</p>
				</div>
				<div className="flex items-center gap-4 p-2">
					<Label className="min-w-min flex-shrink-0" htmlFor="date">
						<p>Date</p>
					</Label>
					<DatePicker date={date} setDate={setDate} />
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p data-testid="date-result">
						{date?.toLocaleDateString() || 'No date'}
					</p>
				</div>
				<div className="flex items-center gap-4 p-2">
					<Label className="min-w-min flex-shrink-0" htmlFor="resume">
						<p>File</p>
					</Label>
					<Input
						type="file"
						name="resume"
						id="resume"
						data-testid="file-input"
						value={file}
						onChange={e => setFile(e.target.value)}
					/>
				</div>
				<div className="flex items-center justify-around gap-2 border-2 p-2">
					<p data-testid="file-result">{file || 'No file'}</p>
				</div>
			</div>
		</Frame>
	)
}

export default GalacticInputGala
