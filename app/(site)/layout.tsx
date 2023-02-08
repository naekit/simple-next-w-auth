import Footer from "./footer"
import "./globals.css"
import Header from "./header"
import Provider from "./provider"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body className="h-screen bg-stone-200">
				<Provider>
					<Header />
					<main>{children}</main>
					<Footer />
				</Provider>
			</body>
		</html>
	)
}
