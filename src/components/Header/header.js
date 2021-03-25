import React from 'react';
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/users/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../CartIcon/cart-icon';
import CartDropdown from '../CartDropdown/cart-dropdown';

import './header.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styled';

const Header = ({ currentUser, hidden }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/contact'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='/sign-in'>SIGN IN</OptionLink>
				)}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <CartDropdown />}
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden,
});

// * connect is a HOC
// * the first args will be the state(rootReducer)
export default connect(mapStateToProps)(Header);
