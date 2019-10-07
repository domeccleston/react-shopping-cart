import React, { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	const { cart, localCart, removeItem } = useContext(CartContext);	
	const getCartTotal = () => {
		return localCart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};
	return (
		<div className="shopping-cart">
			{localCart.map(item => (
				<Item removeItem={removeItem} key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;

