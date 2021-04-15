import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from '../pages/homepage/homepage';
import ShopPage from '../containers/shop/shop';
import Auth from '../pages/Auth/auth';
import CheckoutPage from '../pages/checkout/checkout';
import Header from '../components/Header/header';

import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import { setCurrentUser } from '../redux/users/user.actions';
import { selectCurrentUser } from '../redux/users/user.selector';

import { GlobalStyle } from '../global.styles';

class App extends React.Component {
	unsubscribeFromAuth = null;

	// * Google SignIn using O-Auth
	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				// * we listen to the userRef for any changes in the data and also get back the first State of that data
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
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
				<GlobalStyle />
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/checkout' component={CheckoutPage} />
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
