import Image from "next/image"

const User = async ({ user }) => {
	return (
		<section className="m-4 py-4">
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
		</section>
	)
}

export default User
