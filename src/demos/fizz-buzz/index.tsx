import { type PropsWithChildren, useState } from 'react'
import { Frame } from '../../components/frame'
import { Slider } from '../../components/slider'
import { Label } from '../../components/label'

export const FizzBuzz = () => {
	const [number, setNumber] = useState([1])
	return (
		<Frame>
			<header>
				<h1>Fizz Buzz</h1>
			</header>
			<Label>Showing {number} items</Label>
			<div className="flex items-center space-x-4">
				<span>1</span>
				<Slider
					id="select-number"
					min={1}
					max={100}
					value={number}
					onValueChange={v => {
						setNumber(v)
					}}
				/>
				<span>100</span>
			</div>
			<div className="grid grid-cols-10 gap-4"></div>
		</Frame>
	)
}
