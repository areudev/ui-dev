import React from 'react'
import { render, screen, fireEvent } from '../../../test/utilities'
import { Input } from '../input'

describe('Input component', () => {
	it('should render correctly', () => {
		render(<Input data-testid="my-input" />)
		const input = screen.getByTestId('my-input')
		expect(input).toBeInTheDocument()
	})

	it('should forward a ref', () => {
		const ref = React.createRef<HTMLInputElement>()
		render(<Input ref={ref} />)
		expect(ref.current).toBeDefined()
		expect(ref.current?.tagName).toEqual('INPUT')
	})

	it('should accept and forward an input type', () => {
		render(<Input type="password" data-testid="my-input" />)
		const input = screen.getByTestId('my-input') as HTMLInputElement
		expect(input.type).toBe('password')
	})

	it('should accept additional class names', () => {
		render(<Input className="my-class" data-testid="my-input" />)
		const input = screen.getByTestId('my-input')
		expect(input).toHaveClass('my-class')
	})

	it('should respect the disabled prop', () => {
		render(<Input disabled data-testid="my-input" />)
		const input = screen.getByTestId('my-input')
		expect(input).toBeDisabled()
	})

	it('should handle user input', () => {
		render(<Input data-testid="my-input" />)
		const input = screen.getByTestId('my-input')
		fireEvent.change(input, { target: { value: 'Hello, World!' } })
		expect(input).toHaveValue('Hello, World!')
	})

	it('should handle user input v2', async () => {
		const { user } = render(<Input data-testid="my-input" />)
		const input = screen.getByTestId('my-input')
		await user.type(input, 'Hello, World!')
		expect(input).toHaveValue('Hello, World!')
	})

	it('should forward other props', () => {
		render(<Input data-testid="my-input" aria-label="My input" />)
		const input = screen.getByLabelText('My input')
		expect(input).toBeInTheDocument()
	})
})
