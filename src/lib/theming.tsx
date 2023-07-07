import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from '../components/button'

function ThemeToggler() {
	const [theme, setTheme] = useState<string>('light')

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light'
		setTheme(newTheme)
		window.localStorage.setItem('theme', newTheme)
	}

	useEffect(() => {
		const syncThemeWithLocalStorage = (e: StorageEvent) => {
			if (e.key === 'theme') {
				setTheme(e.newValue || 'light')
			}
		}

		const storedTheme = window.localStorage.getItem('theme') || 'light'
		setTheme(storedTheme)
		document.body.classList.remove('light', 'dark')
		document.body.classList.add(storedTheme)

		window.addEventListener('storage', syncThemeWithLocalStorage)
		return () => {
			window.removeEventListener('storage', syncThemeWithLocalStorage)
		}
	}, [])

	useEffect(() => {
		document.body.classList.remove('light', 'dark')
		document.body.classList.add(theme)
	}, [theme])

	return (
		<Button
			aria-label="Toggle theme"
			name="theme-toggler"
			variant="ghost"
			className="m-4 p-2 rounded-full "
			onClick={toggleTheme}
		>
			{theme === 'light' ? (
				<Moon className="w-6 h-6" />
			) : (
				<Sun className="w-6 h-6" />
			)}
		</Button>
	)
}

export default ThemeToggler
