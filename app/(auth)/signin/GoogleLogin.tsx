"use client"
import { useSearchParams } from "next/navigation"
import { signIn } from "next-auth/react"
import Link from "next/link"

const GoogleLoginButton = () => {
	const searchParamas = useSearchParams()
	const callbackUrl: any = searchParamas.get("callbackUrl")

	return (
		<button
			onClick={() => signIn("google", { callbackUrl })}
			className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
		>
			Sign in with Google
		</button>
	)
}

export default GoogleLoginButton
