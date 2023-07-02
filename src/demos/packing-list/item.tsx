import clsx from 'clsx'
import * as React from 'react'
import { Checkbox } from '../../components/checkbox'
import { Label } from '../../components/label'
import { Input } from '../../components/input'
import { Button } from '../../components/button'

const item = {
	id: '1',
	name: 'Toothbrush',
	packed: false,
}
export const Item = ({ itemId }: { itemId: string }) => {
	const [isEditing, setIsEditing] = React.useState(false)
	return (
		<li className="flex items-center gap-2">
			<Checkbox
				id={`toggle-${item.id}`}
				checked={item.packed}
				onCheckedChange={() => {
					item.packed = !item.packed
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
					console.log(e.target.value)
				}}
			/>
			<div className="flex gap-2">
				<Button size="sm" aria-label={`Edit ${item.name}`}>
					{isEditing ? '💾 Save' : '✍️ Edit'}
				</Button>
				<Button
					size="sm"
					variant="destructive"
					aria-label={`Remove ${item.name}`}
					onClick={() => {
						console.log('remove')
					}}
				>
					🗑️ Remove
				</Button>
			</div>
		</li>
	)
}
