"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function LoginButton() {
	const { data: session } = useSession()
	return (
		<>
			{!session && (
				<button
					className="text-gray-900 hover:text-gray-700"
					onClick={() => signIn()}
				>
					Sign in
				</button>
			)}
			{session && (
				<button
					className="text-gray-900 hover:text-gray-700"
					onClick={() => signOut()}
				>
					Sign out
				</button>
			)}
		</>
	)
}
