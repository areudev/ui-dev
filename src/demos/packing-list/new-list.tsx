import { toKebabCase } from '../../lib/to-kebab-case'
import { Item } from './item'
import { useItemIds } from './store/hooks'

export const ItemList = ({
	title,
	packed,
}: {
	title: string
	packed: boolean
}) => {
	const id = toKebabCase(title)
	const itemIds = useItemIds(packed)

	return (
		<section
			id={id}
			className="w-full border-2 border-border p-4"
			data-testid={id}
		>
			<header className="mb-4">
				<h2>{title}</h2>
			</header>
			<ul className="flex flex-col gap-2" data-testid={`${id}-list`}>
				{itemIds.map(itemId => (
					<Item key={itemId} itemId={itemId} />
				))}
			</ul>
			{!itemIds.length && <p>Nothing here yet</p>}
		</section>
	)
}
