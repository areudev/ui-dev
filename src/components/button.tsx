import React from 'react'

export default function Button(props: React.ComponentProps<'button'>) {
	return <button className="bg-secondary-foreground text-cyan-300" {...props} />
}
