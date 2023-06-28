import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Button} from './components/button'
import {Input} from './components/input'
import {Label} from './components/label'
import {Checkbox} from './components/checkbox'
import {Frame} from './components/frame'

function App() {
	return (
		<Frame>
			<div className="container flex flex-col items-center justify-center gap-2">
				<h1 className="text-2xl">Yo world</h1>
				<div>
					<Button>Hi Mom</Button>
				</div>
				<Frame>
					<div className="flex flex-col gap-2">
						<Label>Label</Label>
						<Input placeholder="Yo yoyo yo yo" />
					</div>
					<div className="flex gap-2 items-center">
						<Checkbox />
						<Label>Checkbox</Label>
					</div>
				</Frame>
			</div>
		</Frame>
	)
}

export default App
