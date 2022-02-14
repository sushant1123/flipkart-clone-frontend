import {
	addToCartRequest,
	addToCartFailure,
	addToCartSuccess,
} from "./cart.actions";

import store from "../store/store";

// import axios from "../../helpers/axios";

export const addToCart = (product) => {
	return async (dispatch) => {
		const { cartItems } = store.getState().cart;
		// console.log("action::products", cartItems);
		const qty = cartItems[product._id]
			? parseInt(cartItems[product._id].qty + 1)
			: 1;

		cartItems[product._id] = {
			...product,
			qty,
		};

		localStorage.setItem("cart", JSON.stringify(cartItems));

		dispatch(addToCartSuccess(cartItems));
	};
};

export const updateCart = () => {
	return async (dispatch) => {
		const cart = localStorage.getItem("cart")
			? JSON.parse(localStorage.getItem("cart"))
			: null;

		if (cart) {
			dispatch(addToCartSuccess(cart));
		}
	};
};
