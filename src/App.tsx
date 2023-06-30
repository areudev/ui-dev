import { Calendar } from './components/calendar'
import Counter from './demos/counter'
import { FizzBuzz } from './demos/fizz-buzz'
import GalacticInputGala from './demos/galactic-input-gala'
import { PackingList } from './demos/packing-list'
import ThemeToggler from './lib/theming'

function App() {
	return (
		<div className="space-y-4">
			<FizzBuzz />
			<ThemeToggler />
			<PackingList />
			<Counter />
			<GalacticInputGala />
		</div>
	)
}

export default App
