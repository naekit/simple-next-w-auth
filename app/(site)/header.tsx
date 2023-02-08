// header component nextjs 13 typescript
import Link from "next/link"
import LoginButton from "./LoginButton"

export default function Header() {
	return (
		<header className="bg-gray-100 py-8">
			<nav className="container mx-auto flex items-center justify-between">
				<Link className="text-gray-900 hover:text-gray-700" href="/">
					Logo
				</Link>
				<ul className="flex items-center space-x-4">
					<li>
						<Link
							className="text-gray-900 hover:text-gray-700"
							href="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className="text-gray-900 hover:text-gray-700"
							href="/users"
						>
							Users
						</Link>
					</li>
					<li>
						<LoginButton />
					</li>
				</ul>
			</nav>
		</header>
	)
}
