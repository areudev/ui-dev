import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/button'

function App() {
	return (
		<div className="bg-background text-foreground container">
			<div className="flex flex-col align-center justify-center">
				<img src={reactLogo} alt="react" className="h-12 mr-2" />
				<img src={viteLogo} alt="vite" className="h-12" />
				<div>
					<Button>Hello Vite + React!</Button>
				</div>
			</div>
		</div>
	)
}

export default App
