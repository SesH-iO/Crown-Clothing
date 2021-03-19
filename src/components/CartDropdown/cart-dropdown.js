import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../CustomButton/custom-button';
import CartItem from '../CartItem/cart-item';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items' id='style-1'>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
