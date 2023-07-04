// @vitest-environment happy-dom

import { render } from '@testing-library/react'
import Counter from '.'
import { test } from 'vitest'

test('it should render the component', () => {
	render(<Counter />)
})
