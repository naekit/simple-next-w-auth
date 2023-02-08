import Users from "./Users"

const UsersLayout = async ({ children }: any) => {
	return (
		<section className="flex">
			<aside className="w-1/4 bg-gray-200">
				<Users />
			</aside>
			<main>{children}</main>
		</section>
	)
}

export default UsersLayout
