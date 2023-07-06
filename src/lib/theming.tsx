import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from '../components/button'

function ThemeToggler() {
	const [theme, setTheme] = useState<string>('light')

	useEffect(() => {
		const initialTheme = document.body.classList.contains('dark')
			? 'dark'
			: 'light'
		setTheme(initialTheme)
	}, [])
	useEffect(() => {
		document.body.classList.remove('light', 'dark')
		document.body.classList.add(theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<Button
			aria-label="Toggle theme"
			name="theme-toggler"
			variant="ghost"
			// className="absolute top-0 right-0 m-4 p-2 rounded-full "
			className="m-4 p-2 rounded-full "
			onClick={toggleTheme}
		>
			{theme === 'light' ? (
				<Sun className="w-6 h-6" />
			) : (
				<Moon className="w-6 h-6" />
			)}
		</Button>
	)
}

export default ThemeToggler
