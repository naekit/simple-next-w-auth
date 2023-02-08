import "../(site)/globals.css"

import Link from "next/link"
import { ChevronLeftIcon } from "@heroicons/react/outline"

export default function AuthLayout({ children }: any) {
	return (
		<html lang="en">
			<head />
			<body className="bg-gray-100">
				<div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
					<div className="sm:mx-auto sm:w-full sm:max-w-md">
						<Link href="/">
							<a className="flex items-center justify-center">
								<ChevronLeftIcon className="h-6 w-6 text-gray-500" />
								<span className="ml-2 text-gray-500">
									Back to home
								</span>
							</a>
						</Link>
					</div>
					<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
						<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
