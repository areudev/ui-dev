import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import useSWR from 'swr'

export type Pokemon = {
	id: number
	name: string
	base_experience: number
	height: number
	weight: number
	abilities: Ability[]
}

export type Ability = {
	ability: {
		name: string
		url: string
	}
	is_hidden: boolean
	slot: number
}

export const fetcher = (url: string) => fetch(url).then(res => res.json())

const PokemonPage = () => {
	const { id } = useParams<{ id: string }>()
	const location = useLocation()
	const pokemon = location.state.pokemon as Pokemon

	if (!pokemon) return <div>loading i guess...</div>

	return (
		<div>
			<h1>{pokemon.name}</h1>
			<p>Height: {pokemon.height}</p>
			<p>Weight: {pokemon.weight}</p>
			<p>Base Experience: {pokemon.base_experience}</p>
			<h2>Abilities</h2>
			<ul>
				{pokemon.abilities.map(ability => (
					<li key={ability.ability.name}>{ability.ability.name}</li>
				))}
			</ul>
		</div>
	)
}

export default PokemonPage
