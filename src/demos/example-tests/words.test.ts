import { describe, it, expect, test } from 'vitest'
import { embolden, makeLouder, repeat } from './words'

describe('repeat', () => {
	it('should repeat the word three times by default', () => {
		expect(repeat('lol')).toBe('lollollol')
	})

	it('should repeat the word a certain number of times', () => {
		expect(repeat('lol', 2)).toBe('lollol')
	})
})

describe('makeLouder', () => {
	it('should repeat the word three times by default', () => {
		expect(makeLouder('lol')).toBe('LOL')
	})
})

describe('embolden', () => {
	it('should wrap a fiven string in <b> tags', () => {
		expect(embolden('lol')).toBe('<b>lol</b>')
	})
})

test('should work', () => {
	expect(makeLouder('yo')).toBe('YO')
})
