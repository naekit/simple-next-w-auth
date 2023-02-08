"use client"
import { useEffect } from "react"

export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="my-6 mx-8">
			<h2 className="text-lg font-medium">Something went wrong!</h2>
			<button onClick={() => reset()}>Reset error boundary</button>
		</div>
	)
}
