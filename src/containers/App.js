import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/homepage/homepage';
import ShopPage from '../containers/Shop/shop';
import Auth from '../pages/Auth/auth';
import Header from '../components/Header/header';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class App extends React.Component {
	state = {
		currentUser: null,
	};

	unsubscribeFromAuth = null;

	// * Google SignIn using O-Auth
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// * we listen to the userRef for any changes in the data and also get back the first State of that data
				userRef.onSnapshot((snapShopt) => {
					this.setState({
						currentUser: {
							id: snapShopt.id,
							...snapShopt.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/sign-in' component={Auth} />
				</Switch>
			</div>
		);
	}
}

export default App;
