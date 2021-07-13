import { auth } from "../config/firebase"

export default function Home() {
	const handleSignOut = () => {
		auth.signOut()
			.then(() => {
				console.log("Sign-out successful")
			})
			.catch(err => {
				alert(err.message)
				console.log(err)
			})
	}

	return (
		<>
			<h1>Home</h1>
			<button onClick={handleSignOut}>Sign out</button>
		</>
	)
}
