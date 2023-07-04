import { useDispatch } from 'react-redux'
import { markAllAsUnpacked } from './store/items-slice'
import { Button } from '$components/button'

export const MarkAllAsUnpacked = () => {
	const dispatch = useDispatch()

	return (
		<Button
			variant="outline"
			className="w-full text-lg "
			onClick={() => {
				dispatch(markAllAsUnpacked())
			}}
		>
			Mark All As Unpacked
		</Button>
	)
}
