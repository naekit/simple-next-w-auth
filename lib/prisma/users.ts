import prisma from "."

export async function getUser() {
	try {
		const users = await prisma.user.findMany()
		return users
	} catch (error) {
		console.error(error)
		return { error }
	}
}

export async function createUser(user: any) {
	try {
		const userDb = await prisma.user.create({
			data: user,
		})
		return { user: userDb }
	} catch (error) {
		console.error(error)
		return { error }
	}
}

export async function getUserById(id: string) {
	try {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		})
		return { user }
	} catch (error) {
		console.error(error)
		return { error }
	}
}
