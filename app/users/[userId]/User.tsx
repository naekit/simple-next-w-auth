import Image from "next/image"

const User: any = async ({ user }: any) => {
	return (
		<section className="m-4 py-4 flex gap-10">
			<div>
				<Image
					src={user?.imageUrl}
					alt={user.name}
					style={{ objectFit: "cover" }}
					width={200}
					height={200}
				/>
				<h1 className="text-2xl font-semibold">{user.name}</h1>
				<p className="text-sm text-stone-700">{user.email}</p>
			</div>
			<div className="grow">
				{user.posts.length !== 0 && (
					<h2 className="text-xl font-semibold">Posts</h2>
				)}
				<ul>
					{user.posts?.map((post: any) => (
						<li key={post.id}>
							<h3 className="text-lg font-semibold">
								{post.title}
							</h3>
							<p className="text-sm text-stone-700">
								{post.content}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default User
