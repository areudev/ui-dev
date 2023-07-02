import { useDispatch } from 'react-redux'
import { markAllAsUnpacked } from './store/items-slice'
import { Button } from '../../components/button'

const MarkAllAsUnpacked = () => {
	const dispatch = useDispatch()

	return (
		<div>
			<Button
				className="w-full"
				onClick={() => {
					dispatch(markAllAsUnpacked())
				}}
			>
				Mark All As Unpacked
			</Button>
		</div>
	)
}
