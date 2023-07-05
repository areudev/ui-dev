import { fireEvent, getAllByText, render, screen } from 'test/utilities'
import Galactic from '.'

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

it('should input text into the input field', async () => {
	const thought = 'Ravioli are a form of pop tart.'
	const { user } = render(<Galactic />)

	const thoughtInput = screen.getByLabelText('Deep Thought')
	await user.type(thoughtInput, thought)

	expect(thoughtInput).toHaveValue(thought)
})

it('should click a select input', () => {
	render(<Galactic />)
	const buttonSelect = screen.getByRole('combobox')
	fireEvent.click(buttonSelect)
})

it('should find and control a checkbox input', async () => {
	const { user } = render(<Galactic />)

	const checkbox = screen.getByLabelText('pepperoni')
	await user.click(checkbox)
	expect(checkbox).toBeChecked()
})

it('should find and control a radio input', async () => {
	const { user } = render(<Galactic />)

	const group = screen.getByTestId('radio-group-beatles')
	const radio = screen.getByLabelText('Offset')
	const radio2 = screen.getByLabelText('Quavo')
	await user.click(radio)
	expect(radio).toBeChecked()
	expect(radio2).not.toBeChecked()
})

it('should find and control a color input', async () => {
	const { user } = render(<Galactic />)

	const color = screen.getByLabelText('Favorite Color')
	expect(color).toHaveValue('#38bdf8')
	fireEvent.change(color, { target: { value: '#FF0000' } })
	expect(color).toHaveValue('#ff0000')
})

it.todo('should find and control a date input', () => {})

it.todo('should find and control a range input', () => {})

it.todo('should find and control a file input', () => {})
