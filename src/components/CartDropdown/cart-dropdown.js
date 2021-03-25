import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../CustomButton/custom-button';
import CartItem from '../CartItem/cart-item';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items' id='scroll-bar'>
				{cartItems.length ? (
					cartItems.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
				) : (
					<span id='empty-message'>Your Cart is Empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// * Here connect dispatches the mapDispatchToProps to our component as prop if we don't pass the second argument to connect
// * the reason is, if we need to make a one off action dispatches, there no reason to write another map Dispatch to props it might be more verbose.
export default withRouter(connect(mapStateToProps)(CartDropdown));
