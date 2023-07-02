import { useSelector, useDispatch as useReduxDispatch } from 'react-redux'
import type { Item } from './items-slice'
import type { ApplicationState, ApplicationDispatch } from '.'

export const useAllItems = (): Item[] =>
	useSelector<ApplicationState, Item[]>(state => Object.values(state.items))

export const useItems = (packed: boolean): Item[] =>
	useSelector<ApplicationState, Item[]>(state =>
		Object.values(state.items).filter(item => item.packed === packed),
	)

export const useItemIds = (packed: boolean): string[] =>
	useItems(packed).map(({ id }) => id)

export const useItem = (id: string): Item =>
	useSelector<ApplicationState, Item>(state => state.items[id])

export const useDispatch: () => ApplicationDispatch = useReduxDispatch
