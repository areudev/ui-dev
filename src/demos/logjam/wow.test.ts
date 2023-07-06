import { test, expect, vi } from 'vitest'
import { log } from './log'

test('it spies yo', () => {
	const mock = vi.fn((x?: string) => {
		if (x) {
			return x.repeat(2)
		}
	})

	mock()
	mock()
	const result = mock('wow')

	vi.spyOn(console, 'log').mockImplementation
	log('log', 1, 2, 3, 4)
	// log('log', 1, 2, 3, 4)
	console.log(1, 2, 3, 4)

	// requestFromApi()

	expect(console.log).toHaveBeenCalledTimes(2)
	expect(console.log).toHaveBeenCalledWith(1, 2, 3, 4)
	// expect(console.warn).toHaveBeenCalledTimes(1)

	expect(mock).toHaveBeenCalledTimes(3)
	expect(mock).toHaveBeenCalledWith('wow')
	expect(result).toBe('wowwow')
})
