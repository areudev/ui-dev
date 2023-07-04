import React from 'react'
import { render, screen } from 'test/utilities'
import { Checkbox } from '../checkbox'
import { vi } from 'vitest'

describe('Checkbox component', () => {
	it('should render correctly', () => {
		render(<Checkbox data-testid="my-checkbox" />)
		const checkbox = screen.getByTestId('my-checkbox')
		expect(checkbox).toBeInTheDocument()
	})

	it('should forward a ref', () => {
		const ref = React.createRef<HTMLButtonElement>()
		render(<Checkbox ref={ref} />)
		expect(ref.current).toBeDefined()
		expect(ref.current?.tagName).toEqual('BUTTON')
	})

	it('should respect the disabled prop', () => {
		render(<Checkbox disabled data-testid="my-checkbox" />)
		const checkbox = screen.getByTestId('my-checkbox')
		expect(checkbox).toBeDisabled()
	})

	it('should handle user interactions', async () => {
		const { user } = render(<Checkbox data-testid="my-checkbox" />)
		const checkbox = screen.getByTestId('my-checkbox')

		await user.click(checkbox)
		expect(checkbox).toBeChecked()

		await user.click(checkbox)
		expect(checkbox).not.toBeChecked()
	})

	it('should handle user interactions as controlled', async () => {
		const handleCheckedChange = vi.fn()
		const { user } = render(
			<Checkbox
				onCheckedChange={handleCheckedChange}
				data-testid="my-checkbox"
			/>,
		)
		const checkbox = screen.getByTestId('my-checkbox')

		await user.click(checkbox)
		expect(handleCheckedChange).toBeCalledWith(true)

		await user.click(checkbox)
		expect(handleCheckedChange).toBeCalledWith(false)
	})

	it('should forward other props', () => {
		render(<Checkbox data-testid="my-checkbox" aria-label="My checkbox" />)
		const checkbox = screen.getByLabelText('My checkbox')
		expect(checkbox).toBeInTheDocument()
	})
})
