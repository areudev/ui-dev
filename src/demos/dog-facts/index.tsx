import { useState, useEffect } from 'react'
import dogFactsData from './dog-facts.json'
import {
	Select,
	SelectValue,
	SelectTrigger,
	SelectContent,
	SelectItem,
} from '$components/select'
import { Button } from '$components/button'

interface DogFact {
	id: number
	fact: string
}

const shuffleArray = (array: DogFact[]): DogFact[] =>
	[...array].sort(() => Math.random() - 0.5)

const getRandomDogFacts = (amount: number): DogFact[] => {
	const shuffledFacts = shuffleArray(dogFactsData)
	return shuffledFacts.slice(0, amount)
}

const DogFacts = () => {
	const [numberOfFacts, setNumberOfFacts] = useState(3)
	const [facts, setFacts] = useState<DogFact[]>([])

	useEffect(() => {
		setFacts(getRandomDogFacts(numberOfFacts))
	}, [numberOfFacts])

	const handleClearFacts = () => {
		setFacts([])
	}

	return (
		<>
			<h1>Dog Facts</h1>
			<div className="flex flex-col gap-2">
				<p>How many dog facts would you like?</p>
				<Select
					onValueChange={v => {
						setNumberOfFacts(Number(v))
					}}
				>
					<SelectTrigger>
						<SelectValue placeholder="Number Of facts" />
					</SelectTrigger>
					<SelectContent>
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
							<SelectItem key={number} value={number.toString()}>
								{number} {number === 1 ? 'Fact' : 'Facts'}
							</SelectItem>
						))}
					</SelectContent>
				</Select>

				<Button variant="ghost" onClick={handleClearFacts}>
					Clear
				</Button>

				<section id="facts">
					{facts.length > 0 ? (
						facts.map(fact => (
							<article
								key={fact.id}
								className="my-4 p-4 border-4 border-border"
								data-testid="dog-fact"
							>
								<h2>Dog Fact #{fact.id}</h2>
								<p>{fact.fact}</p>
							</article>
						))
					) : (
						<p className="text-center p-4 my-4" data-testid="empty-state">
							Fetch some dog facts or something.
						</p>
					)}
				</section>
			</div>
		</>
	)
}

export default DogFacts
