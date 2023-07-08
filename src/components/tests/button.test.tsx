import { render, screen } from '@testing-library/react'
import { render as renderComponent } from 'test/utilities'
import { Button, ButtonProps } from '../button'
import { vi } from 'vitest'

describe('Button', () => {
	it('renders button with default props', () => {
		renderComponent(<Button />)
		const button = screen.getByRole('button')

		expect(button).toBeInTheDocument()
	})

	it('handles click events', async () => {
		const handleClick = vi.fn()
		const { user } = renderComponent(<Button onClick={handleClick} />)
		const button = screen.getByRole('button')

		await user.click(button)
		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	it('renders as a child with Slot', () => {
		render(
			<Button asChild data-testid="span">
				<span>child</span>
			</Button>,
		)
		const span = screen.getByTestId('span')
		expect(span).toContainHTML('child')
	})

	it('renders with passed className', () => {
		render(<Button className="test-classname" />)
		const button = screen.getByRole('button')

		expect(button).toHaveClass('test-classname')
	})

	type Variant = ButtonProps['variant']

	const variants: Variant[] = [
		'default',
		'destructive',
		'outline',
		'secondary',
		'ghost',
		'link',
	]

	test.each(variants)('renders with variant: %s', (variant: Variant) => {
		render(<Button variant={variant} />)
		const button = screen.getByRole('button')
		expect(button).toBeInTheDocument()
	})
})
