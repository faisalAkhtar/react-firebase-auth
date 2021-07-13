import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"

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
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route component={Error404} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
