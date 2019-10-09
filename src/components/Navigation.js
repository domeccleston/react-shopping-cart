import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from "../contexts/CartContext";

const Navigation = () => {

	const { cart } = useContext(CartContext);
	const { localCart } = useContext(CartContext);

	console.log(localCart)

	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{localCart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
