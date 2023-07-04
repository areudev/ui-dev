import { render } from 'test/utilities'
import { axe, toHaveNoViolations } from 'jest-axe'
import Counter from '.'
// global.ResizeObserver = class ResizeObserver {
// 	observe() {
// 		// do nothing here
// 	}
// 	unobserve() {
// 		// do nothing here
// 	}
// 	disconnect() {
// 		// do nothing here
// 	}
// }
expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage', async () => {
	const { container } = render(<Counter />)
	const results = await axe(container)
	expect(results).toHaveNoViolations()
})
