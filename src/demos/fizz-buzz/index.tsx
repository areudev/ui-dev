import { useState } from 'react'
import { Frame } from '$components/frame'
import { Slider } from '$components/slider'
import { Label } from '$components/label'
import { repeat } from '$lib/repeat'
import { toFizzBuzz } from '$lib/to-fizz-buzz'
import clsx from 'clsx'

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
			<div className="grid grid-cols-10 gap-4">
				{repeat(number[0], i => (
					<div
						key={i}
						className={clsx(
							'border-2 border-border text-center font-semibold',
							{
								'bg-red-500 text-white': i % 15 === 0,
								'bg-blue-500 text-white': i % 5 === 0 && i % 15 !== 0,
								'bg-green-500 text-white':
									i % 3 === 0 && i % 15 !== 0 && i % 5 !== 0,
							},
						)}
					>
						<p>{toFizzBuzz(i)}</p>
					</div>
				))}
			</div>
		</Frame>
	)
}
