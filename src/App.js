import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';

const HatsPage = () => {
	return (
		<div>
			<h1>Hats Page</h1>
		</div>
	);
};

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path='/shop/hats' component={HatsPage} />
					<Route path='/' component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default App;
