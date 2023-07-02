import clsx from 'clsx'
import * as React from 'react'
import { Checkbox } from '../../components/checkbox'
import { Label } from '../../components/label'
import { Input } from '../../components/input'
import { Button } from '../../components/button'
import { useItem } from './store/hooks'
import { remove, toggle, update } from './store/items-slice'
import { useDispatch } from 'react-redux'

export const Item = ({ itemId }: { itemId: string }) => {
	const [isEditing, setIsEditing] = React.useState(false)
	const item = useItem(itemId)
	const dispatch = useDispatch()
	return (
		<li className="flex items-center justify-between gap-2">
			<div className="flex items-center gap-2">
				<Checkbox
					id={`toggle-${item.id}`}
					checked={item.packed}
					onCheckedChange={() => {
						dispatch(toggle({ id: itemId }))
					}}
				/>
				<Label
					htmlFor={`toggle-${item.id}`}
					className={clsx({ hidden: isEditing })}
				>
					{item.name}
				</Label>

				<Input
					value={item.name}
					className={clsx('py-0 text-sm', { hidden: !isEditing })}
					onChange={e => {
						dispatch(update({ id: itemId, name: e.target.value }))
					}}
				/>
			</div>
			<div>
				<div className="flex gap-2">
					<Button
						size="sm"
						aria-label={`Edit ${item.name}`}
						onClick={() => {
							setIsEditing(!isEditing)
						}}
					>
						{isEditing ? 'Save' : 'Edit'}
					</Button>
					<Button
						size="sm"
						variant="destructive"
						aria-label={`Remove ${item.name}`}
						onClick={() => {
							dispatch(remove({ id: itemId }))
						}}
					>
						Remove
					</Button>
				</div>
			</div>
		</li>
	)
}
