import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/CheckoutItem/checkout-item';
import StripeCheckoutButton from '../../components/StripeButton/stripe-button';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.scss';

const CheckoutPage = ({ cartItems, total }) => {
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>PRODUCT</span>
				</div>
				<div className='header-block'>
					<span>DESCRIPTION</span>
				</div>
				<div className='header-block'>
					<span>QUANTITY NUMBER</span>
				</div>
				<div className='header-block'>
					<span>PRICE</span>
				</div>
				<div className='header-block'>
					<span>REMOVE</span>
				</div>
			</div>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<div className='total'>
				<span>TOTAL: ${total}</span>
			</div>
			<div className='test-warning'>
				**PLEASE USE THE FOLLOWING TEST CREDIT CARD FOR PAYMENT**
				<br />
				CARD-NO: 4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
			</div>

			<StripeCheckoutButton price={total} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
