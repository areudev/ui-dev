import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			$components: '../../components',
		},
	},
	test: {
		globals: true,
		setupFiles: './test/setup.ts',
		environmentMatchGlobs: [
			['**/*.test.tsx', 'jsdom'],
			['**/*.component.test.ts', 'jsdom'],
		],
	},
})
