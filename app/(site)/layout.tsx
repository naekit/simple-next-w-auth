import Footer from "./footer"
import "./globals.css"
import Header from "./header"

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<head />
			<body className="h-screen bg-stone-200">
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
