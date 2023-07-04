import { render, screen } from 'test/utilities'
import { Popover, PopoverTrigger, PopoverContent } from '../popover'

// Mocking ResizeObserver
global.ResizeObserver = class ResizeObserver {
	observe() {
		// do nothing here
	}
	unobserve() {
		// do nothing here
	}
	disconnect() {
		// do nothing here
	}
}

describe('Popover component', () => {
	it('renders correctly', () => {
		render(
			<Popover>
				<PopoverTrigger>Trigger</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		)
		expect(screen.getByText('Trigger')).toBeInTheDocument()
	})

	it('shows the content when the trigger is clicked', async () => {
		const { user } = render(
			<Popover>
				<PopoverTrigger>Trigger</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		)

		const trigger = screen.getByText('Trigger')
		await user.click(trigger)

		expect(screen.getByText('Content')).toBeVisible()
	})

	it('hides the content when the trigger is clicked again', async () => {
		const { user } = render(
			<Popover>
				<PopoverTrigger>Trigger</PopoverTrigger>
				<PopoverContent>Content</PopoverContent>
			</Popover>,
		)

		const trigger = screen.getByText('Trigger')
		await user.click(trigger)

		expect(screen.getByText('Content')).toBeVisible()

		await user.click(trigger)
		expect(screen.queryByText('Content')).not.toBeInTheDocument()
	})
})
