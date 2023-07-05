import { render } from 'test/utilities'
import { axe, toHaveNoViolations } from 'jest-axe'
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

expect.extend(toHaveNoViolations)

it.skip('should demonstrate this matcher`s usage', async () => {
	const { container } = render(<Galactic />)
	const results = await axe(container)
	expect(results).toHaveNoViolations()
})
