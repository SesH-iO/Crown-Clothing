import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from '../pages/homepage/homepage';
import ShopPage from '../containers/shop/shop';
import Auth from '../pages/Auth/auth';
import Header from '../components/Header/header';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/users/user.actions';

class App extends React.Component {
	unsubscribeFromAuth = null;

	// * Google SignIn using O-Auth
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// * we listen to the userRef for any changes in the data and also get back the first State of that data
				userRef.onSnapshot((snapShopt) => {
					setCurrentUser({
						id: snapShopt.id,
						...snapShopt.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route
						exact
						path='/sign-in'
						render={() => (this.props.currentUser ? <Redirect to='/' /> : <Auth />)}
					/>
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
