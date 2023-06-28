import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/button'
import {Input} from './components/input'
import {Label} from './components/label'
import {Checkbox} from './components/checkbox'

function App() {
	return (
		<div className="container flex flex-col items-center justify-center gap-2">
			<h1 className="text-3xl">Yo world</h1>
			<div>
				<Button>Hi Mom</Button>
			</div>
			<div className="flex flex-col gap-2">
				<Label>Label</Label>
				<Input placeholder="Yo yoyo yo yo" />
			</div>
			<div className="flex gap-2">
				<Checkbox />
				<Label>Checkbox</Label>
			</div>
		</div>
	)
}

export default App
