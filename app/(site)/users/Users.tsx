// import { getUsers } from "@/lib/prisma/users"
import Link from "next/link"

const Users: any = async ({ users }: any) => {
	// const { users } = await getUsers()

	return (
		<section className="fixed h-full w-1/4 bg-stone-300">
			<div className="center py-4">
				<h2 className="mb-4 text-xl font-semibold text-gray-800">
					Users
				</h2>
				<ul className="space-y-4">
					{users.map((user: any) => (
						<li key={user.id}>
							<Link href={`/users/${user.id}`}>{user.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Users
