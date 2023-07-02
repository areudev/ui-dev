import { useState } from 'react'
import { add } from './store/items-slice'
import { useDispatch } from 'react-redux'
import { Label } from '../../components/label'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { Plus } from 'lucide-react'

export const NewItem = () => {
	const [newItemName, setNewItemName] = useState('')
	const dispatch = useDispatch()

	return (
		<form
			id="new-item"
			onSubmit={e => {
				e.preventDefault()
				if (newItemName.trim() === '') return
				dispatch(add({ name: newItemName }))
				setNewItemName('')
			}}
		>
			<Label className="font-semibold" htmlFor="new-item-name">
				Add New Item
			</Label>
			<div className="flex my-2">
				<Input
					id="new-item-name"
					className="w-full border-r-0 focus-visible:outline-none focus-visible:ring-transparent focus-visible:ring-offset-2"
					type="search"
					placeholder="New Item"
					value={newItemName}
					onChange={e => {
						setNewItemName(e.target.value)
					}}
				/>
				<Button
					id="new-item-submit"
					type="submit"
					className="whitespace-nowrap "
					aria-label="Add new item"
					variant="outline"
				>
					<Plus size={16} className="mr-2" />
					Add New Item
				</Button>
			</div>
		</form>
	)
}
