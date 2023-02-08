"use client"
import TextField from "./TextField"
import GoogleLoginButton from "./GoogleLogin"

const SignInPage = () => {
	return (
		<>
			<form>
				<div className="space-y-2">
					<TextField
						id="email"
						name="email"
						type="email"
						label="Sign in with email"
						placeholder="Email"
						autoComplete="email"
						required
						className="mb-4"
					/>
				</div>
				<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
					Continue with email
				</button>
			</form>
			<div className="mt-4">or</div>
			<GoogleLoginButton />
		</>
	)
}

export default SignInPage
