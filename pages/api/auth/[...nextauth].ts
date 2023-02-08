import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../lib/prisma"

export default NextAuth({
	adapter: PrismaAdapter(prisma),
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
	session: {
		strategy: "jwt",
	},
})
