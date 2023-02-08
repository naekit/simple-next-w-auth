import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export async function auth(req: any, res: any): Promise<void> {
	return await NextAuth(req, res, {
		providers: [
			GoogleProvider({
				// @ts-ignore
				clientId: process.env.GOOGLE_ID,
				// @ts-ignore
				clientSecret: process.env.GOOGLE_SECRET,
			}),
		],
		pages: {
			signIn: "/signin",
		},
		adapter: PrismaAdapter(prisma),
		session: {
			strategy: "jwt",
		},
	})
}
