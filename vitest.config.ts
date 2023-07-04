import path from 'node:path'
import { defineConfig, defaultExclude } from 'vitest/config'
import configuration from './vite.config'

export default defineConfig({
	...configuration,
	resolve: {
		alias: {
			...configuration?.resolve?.alias,
			test: path.resolve(__dirname, './test'),
		},
	},
	test: {
		globals: true,
		setupFiles: path.resolve(__dirname, 'test/setup.ts'),
		environmentMatchGlobs: [
			['**/*.test.tsx', 'jsdom'],
			['**/*.component.test.ts', 'jsdom'],
		],
		// coverage: {
		//   statements: 10.19,
		//   thresholdAutoUpdate: true,
		//   include: ['src/**/*'],
		//   exclude: [
		//     'test/**',
		//     'vite.*.ts',
		//     '**/*.d.ts',
		//     '**/*.test.*',
		//     '**/*.config.*',
		//     '**/snapshot-tests/**',
		//     '**/coverage/**',
		//   ],
		//   all: true,
		// },
	},
})
