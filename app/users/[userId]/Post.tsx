"use client"
import { useEffect, useState } from "react"
import { HeartIcon } from "@heroicons/react/outline"
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid"

const Post = ({ post }: any) => {
	const [favorites, setFavorites] = useState(post?.favorites)
	const [isFavorite, setIsFavorite] = useState(null)

	useEffect(() => {
		if (isFavorite === null) return

		const endpoint = isFavorite
			? `/api/posts/${post.id}/favorite`
			: `/api/posts/${post.id}/unfavorite`
		fetch(endpoint, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then(({ post }) => {
				setFavorites(post.favorites)
			})
	}, [isFavorite, post.id])

	const handleClick = () => setIsFavorite((isFav) => !isFav)

	return (
		<li className="bg-slate-100 p-4 my-4">
			<div className="flex justify-between">
				<div>
					<h3 className="text-lg font-semibold">{post.title}</h3>
					<p className="text-sm text-stone-700">{post.content}</p>
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={handleClick}
						className="flex gap-2 items-center"
					>
						{isFavorite ? (
							<HeartIconFilled className="w-7 h-7 text-red-400" />
						) : (
							<HeartIcon className="w-7 h-7 text-red-400" />
						)}
						<span className="mr-4">{favorites}</span>
					</button>
				</div>
			</div>
		</li>
	)
}

export default Post
