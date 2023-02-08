import { getUserById, getUsers } from "@/lib/prisma/users"
import User from "./User"

export async function generateStaticParams() {
	const { users } = await getUsers()
	return users.map((user: any) => ({ userId: user.id }))
}

const Page = async ({ params }: any) => {
	const { user } = await getUserById(params.userId)
	if (!user) return <div>Not Found</div>

	return <User user={user} />
}

export default Page
