import { favoritePost } from "@/lib/prisma/posts"

const handler = async (req: any, res: any) => {
	if (req.method === "PATCH") {
		try {
			const { postId } = req.query
			const { post, error } = await favoritePost({ postId })
			if (error instanceof Error) {
				throw new Error(error.message)
			}
			return res.status(200).json({ post })
		} catch (error) {
			if (error instanceof Error) {
				return res.status(500).json({ error: error })
			}
		}
	}

	res.setHeader("Allow", ["PATCH"])
	return res.status(425).end(`Method ${req.method} Not Allowed`)
}

export default handler
