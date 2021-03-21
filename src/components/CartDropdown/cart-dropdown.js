import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/custom-button';
import CartItem from '../CartItem/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items' id='scroll-bar'>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
