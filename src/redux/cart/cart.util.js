export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	// * Here if the cart Item i exisits we increase the item by + 1.
	// * only if the cartItem and cartItemToAdd id matches we increase the item.
	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}
	// * If it's not found in the cart we return the a new array
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
