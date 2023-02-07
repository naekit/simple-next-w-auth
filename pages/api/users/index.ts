import { createUser, getUsers } from "@/lib/prisma/users"

const handler = async (req: any, res: any) => {
	if (req.method === "GET") {
		try {
			const { users, error }: { users: any; error: Error } =
				await getUsers()
			if (error instanceof Error) {
				throw new Error(error.message)
			}
			return res.status(200).json({ users })
		} catch (error) {
			if (error instanceof Error) {
				return res.status(500).json({ error: error })
			}
		}
	}
	if (req.method === "POST") {
		try {
			const { user, error } = await createUser(req.body)
			if (error instanceof Error) {
				throw new Error(error.message)
			}
			return res.status(200).json({ user })
		} catch (error) {
			if (error instanceof Error) {
				return res.status(500).json({ error: error })
			}
		}
	}

	res.setHeader("Allow", ["GET", "POST"])
	return res.status(405).end(`Method ${req.method} Not Allowed`)
}

export default handler
