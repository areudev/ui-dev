import { useSelector, useDispatch as useReduxDispatch } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import type { Item } from './items-slice'
import type { ApplicationState, ApplicationDispatch } from '.'

const selectItemsState = (state: ApplicationState) => state.items

const selectAllItems = createSelector([selectItemsState], items =>
	Object.values(items),
)

const selectPackedItems = createSelector([selectAllItems], (items: Item[]) =>
	items.filter(item => item.packed),
)

const selectUnpackedItems = createSelector([selectAllItems], (items: Item[]) =>
	items.filter(item => !item.packed),
)

export const useAllItems = (): Item[] => {
	return useSelector(selectAllItems)
}

export const useItems = (packed: boolean): Item[] => {
	return useSelector(packed ? selectPackedItems : selectUnpackedItems)
}

export const useItemIds = (packed: boolean): string[] => {
	const items = useItems(packed)
	return items.map(({ id }) => id)
}

export const useItem = (id: string): Item => {
	return useSelector((state: ApplicationState) => state.items[id])
}

export const useDispatch: () => ApplicationDispatch = useReduxDispatch
