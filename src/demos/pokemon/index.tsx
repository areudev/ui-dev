import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Pokemon } from './pokemon-page'
import { fetcher } from './pokemon-page'
import useSWR from 'swr'
import { Input } from '$components/input'
import { Button } from '$components/button'
import useDebounce from '../../hooks/use-debounce'

const PokemonSearch = () => {
	const [pokemonName, setPokemonName] = useState('')
	const debouncedPokemonName = useDebounce(pokemonName, 500)
	const navigate = useNavigate()
	const { data: pokemon, error } = useSWR<Pokemon>(
		debouncedPokemonName
			? `https://pokeapi.co/api/v2/pokemon/${debouncedPokemonName}`
			: null,
		fetcher,
	)

	return (
		<div className="flex flex-col gap-5 items-center justify-center h-3/4">
			<Input
				type="text"
				placeholder="Search for a pokemon"
				value={pokemonName}
				onChange={e => setPokemonName(e.target.value)}
			/>
			{error && <div>Failed to load</div>}
			{!error && pokemon && (
				<Button
					onClick={() => {
						navigate(`/pokemon/${pokemon.id}`, { state: { pokemon } })
					}}
					variant="ghost"
				>
					{pokemon.name}
				</Button>
			)}
		</div>
	)
}

export default PokemonSearch
