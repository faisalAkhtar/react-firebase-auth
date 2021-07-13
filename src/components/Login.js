import { useCallback, useContext } from "react"
import { Redirect, withRouter } from "react-router";
import { auth } from "../config/firebase";
import { AuthContext } from "../utils/Auth";

function Login({ history }) {
	const handleLogin = useCallback(async ev => {
		ev.preventDefault()
		const { mail, pass } = ev.target.elements;
		await auth.signInWithEmailAndPassword(mail.value, pass.value)
			.then(() => {
				console.log("Sign-in successful")
				history.push("/")
			})
			.catch(err => {
				alert(err.message)
				console.log(err)
			})
	}, [history])

	const { currentUser } = useContext(AuthContext)
	if (currentUser) return <Redirect to="/" />

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<label>
					Email
					<input name="mail" type="email" required autoFocus />
				</label>

				<label>
					Password
					<input name="pass" type="password" required />
				</label>

				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default withRouter(Login)