import prisma from "."

export async function favoritePost({ postId }: any): Promise<any> {
	try {
		const post = await prisma.post.update({
			where: { id: postId },
			data: {
				favorites: {
					increment: 1,
				},
			},
		})
		return { post }
	} catch (error) {
		return error
	}
}

export async function unFavoritePost({ postId }: any): Promise<any> {
	try {
		const post = await prisma.post.update({
			where: { id: postId },
			data: {
				favorites: {
					decrement: 1,
				},
			},
		})
		return { post }
	} catch (error) {
		return error
	}
}
