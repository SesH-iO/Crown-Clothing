import React from 'react';

import CustomButton from '../CustomButton/custom-button';

import './cart-dropdown.scss';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<div className='cart-items' />
		<CustomButton>CHECKOUT</CustomButton>
	</div>
);

export default CartDropdown;
