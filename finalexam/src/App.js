import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		);
	}
}
export default App;
