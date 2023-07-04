import { useState } from 'react'
import { Frame } from '$components/frame'
import { Button } from '$components/button'

type CounterProps = {
	initialValue?: number
}

const Counter = ({ initialValue = 0 }: CounterProps) => {
	const [count, setCount] = useState(initialValue)

	return (
		<Frame className="text-center ">
			<header>
				<h1>Days Since Last Incident</h1>
			</header>
			<div className="text-center text-8xl" data-testid="current-count">
				{count}
			</div>
			<div className="flex gap-4 justify-center">
				<Button variant="destructive" onClick={() => setCount(0)}>
					Reset
				</Button>
				<Button onClick={() => setCount(c => c + 1)}>Increment</Button>
			</div>
		</Frame>
	)
}

export default Counter
