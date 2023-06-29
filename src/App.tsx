import { Calendar } from './components/calendar'
import Counter from './demos/counter'
import GalacticInputGala from './demos/galactic-input-gala'
import ThemeToggler from './lib/theming'

function App() {
	return (
		<>
			<ThemeToggler />
			<Counter />
			<GalacticInputGala />
			<Calendar onDayClick={(d, m, y) => console.log(d, m, y)} />
		</>
	)
}

export default App
