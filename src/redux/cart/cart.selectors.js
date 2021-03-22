import { createSelector } from 'reselect';

// * Which then we call the selectCartItemsCount() **first** ln - 14
// * And then it refers the selectCartItems ln - 11
// * 2nd this fucntion is called and it refers to selectCart func ln - 9
// * 3rd The state is passed in and will gets the cart object ln - 9
// * And then it passes the cart Object in the second argument of selectCartItems() which then get the cartItems Object ln - 12
// * And Then it passes the cartItems object in the Second argument of seleCartItemsCount()
// * Which then reduces over and gives us an actual final cartItems Count
// * Which is then passed in the itemCount in the cart-icon component [mapStateToProps]

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden);
export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce((accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
	cartItems.reduce(
		(accumalatedQty, cartItem) => accumalatedQty + cartItem.quantity * cartItem.price,
		0
	)
);
