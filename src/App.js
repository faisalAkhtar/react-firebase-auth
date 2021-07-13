import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import { AuthProvider } from "./utils/Auth"
import PrivateRoute from "./utils/PrivateRoute"

const Error404 = () => {
	return (
		<>
			<h3>Error 404</h3>
			<h1>Page not found</h1>
		</>
	)
}

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Switch>
					<PrivateRoute exact path="/" component={Home} />
					<Route exact path="/login" component={Login} />
					<Route component={Error404} />
				</Switch>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
