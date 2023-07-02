import { createSlice } from '@reduxjs/toolkit'

export type Item = {
	id: string
	name: string
	packed: boolean
}

let currentId = 1
const initialState: Record<string, Item> = {}

const itemsSlice = createSlice({
	name: 'items',
	initialState,
	reducers: {
		add(items, action: { payload: Pick<Item, 'name'> }) {
			const id = String(currentId++)
			items[id] = { id, name: action.payload.name, packed: false }
		},
	},
})
