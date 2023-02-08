import Users from "./Users"
import { getUsers } from "@/lib/prisma/users"

async function getData() {
	const { users } = await getUsers()
	if (!users) {
		throw new Error("Failed to fetch data")
	}

	return users
}

const UsersLayout = async ({ children }: any) => {
	const users = await getData()

	return (
		<section className="flex">
			<aside className="w-1/4 bg-gray-200">
				<Users users={users} />
			</aside>
			<main>{children}</main>
		</section>
	)
}

export default UsersLayout
