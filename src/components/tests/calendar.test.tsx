import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DayPicker } from 'react-day-picker'
import { Calendar } from '../calendar'
import { vi } from 'vitest'

// mock the react-day-picker library
vi.mock('react-day-picker', () => {
	return {
		DayPicker: vi.fn().mockImplementation(({ showOutsideDays }) => {
			return (
				<div data-testid="daypicker-component">
					<button data-testid="outside-day" hidden={!showOutsideDays}>
						Outside Day
					</button>
				</div>
			)
		}),
	}
})

describe('Calendar component', () => {
	it('should render properly', () => {
		const { getByTestId } = render(<Calendar />)

		expect(getByTestId('daypicker-component')).toBeInTheDocument()
	})

	it('should render outside days when prop is passed', () => {
		const { getByTestId } = render(<Calendar showOutsideDays />)

		const outsideDay = getByTestId('outside-day')
		expect(outsideDay).toBeInTheDocument()
		expect(outsideDay).toBeVisible()
	})
})
