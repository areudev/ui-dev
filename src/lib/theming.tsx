import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from '../components/button'

function ThemeToggler() {
	const [theme, setTheme] = useState<string>('light')

	useEffect(() => {
		// set initial theme
		const initialTheme = document.body.classList.contains('dark')
			? 'dark'
			: 'light'
		setTheme(initialTheme)
	}, [])

	useEffect(() => {
		// add class to body according to theme
		document.body.classList.remove('light', 'dark')
		document.body.classList.add(theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
	}

	return (
		<Button
			variant="ghost"
			className="absolute top-0 right-0 m-4 p-2 rounded-full "
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
