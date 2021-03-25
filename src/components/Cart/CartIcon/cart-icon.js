import React from 'react';

import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className='cart-icon' onClick={toggleCartHidden}>
			<ShopIcon className='shop-icon' />
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// * The reducer is responsible for calling the mapStateToProps in every re-rendering of the Components
// * even if the component has nothing to do with the other components.
// * This is because it always returns a brand new value and this is why it keep getting called (this effects the Performance of App)
// const mapStateToProps = ({ cart: { cartItems } }) => ({
// 	itemCount: cartItems.reduce((accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity, 0),
// });

// ! So we use a Selector library to avoid this[check cart.selector.js]

// * Here we pass the whole state to selectCartItemsCount
// * And then goes to the selector file..
// * createStructuredSelector auotmatically passes the whole state
const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
