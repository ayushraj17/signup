import React from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogIn from "./components/LogIn";
import history from "./history";
import Movies from "./components/Movies";
import AppBar from "./components/AppBar";

const App = () => {
	return (
		<Router history={history} forceRefresh={true}>
			<div className="App">
				<AppBar />
				<Switch>
					<Route path="/movies">
						<Movies />
					</Route>
					<Route path="/login">
						<LogIn />
					</Route>
					<Route path="/">
						<SignUp />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
