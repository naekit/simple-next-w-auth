import { getUserById } from "@/lib/prisma/users"
import User from "./User"

const Page = async ({ params }) => {
	const { user } = await getUserById(params.userId)

	return <User user={user} />
}

export default Page
