import * as React from 'react'
import clsx from 'clsx'

const Frame = ({
	className,
	...props
}: React.ComponentPropsWithoutRef<'section'>) => {
	return (
		<section
			className={clsx('flex flex-col gap-8 rounded-lg border-4 p-4', className)}
			{...props}
		/>
	)
}

export { Frame }
