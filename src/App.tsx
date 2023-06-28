import { Calendar } from './components/calendar'
import Counter from './demos/counter'

function App() {
	return (
		<>
			<Counter />
			<Calendar onDayClick={(d, m, y) => console.log(d, m, y)} />
		</>
	)
}

export default App
