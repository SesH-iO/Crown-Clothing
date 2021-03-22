import { CartActionTypes as actionTypes } from './cart.types';

export const toggleCartHidden = () => ({
	type: actionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: actionTypes.ADD_ITEM,
	payload: item,
});

export const clearCartItem = (item) => ({
	type: actionTypes.CLEAR_CART_ITEM,
	payload: item,
});

export const removeItem = (item) => ({
	type: actionTypes.REMOVE_ITEM,
	payload: item,
});
