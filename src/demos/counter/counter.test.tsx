import { fireEvent, render, screen } from '@testing-library/react'
import Counter from '.'
import { test } from 'vitest'

test('it bodies', () => {
	screen.debug(document.body)
})

test('it should render the component', () => {
	render(<Counter />)
	screen.debug(document.body)
})

test('it should inccrement the counter', async () => {
	render(<Counter />)
	const currentCount = screen.getByTestId('current-count')
	screen.debug(currentCount)
	fireEvent.click(screen.getByRole('button', { name: /increment/i }))
	fireEvent.click(screen.getByRole('button', { name: /increment/i }))
	// expect(currentCount.textContent).toBe('0')
	expect(currentCount).toHaveTextContent('2')

	fireEvent.click(screen.getByRole('button', { name: /reset/i }))
	expect(currentCount).toHaveTextContent('0')
	// expect(currentCount)('0')
})
