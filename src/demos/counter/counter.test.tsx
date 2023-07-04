import { render, screen } from '@testing-library/react'
import Counter from '.'
import { test } from 'vitest'

test('it bodies', () => {
	screen.debug(document.body)
})

test('it should render the component', () => {
	render(<Counter />)
	screen.debug(document.body)
})
