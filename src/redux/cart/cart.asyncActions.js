import {
	addToCartRequest,
	addToCartFailure,
	addToCartSuccess,
	removeCartItemRequest,
	removeCartItemSuccess,
	removeCartItemFailure,
} from "./cart.actions";

import store from "../store/store";

import axios from "../../helpers/axios";

export const addToCart = (product, newQty = 1) => {
	return async (dispatch) => {
		try {
			const {
				cart: { cartItems },
				auth,
			} = store.getState();

			const qty = cartItems[product._id] ? parseInt(cartItems[product._id].qty + newQty) : 1;

			cartItems[product._id] = { ...product, qty };

			//if user is authenticated then add items to the cart
			if (auth.authenticate) {
				dispatch(addToCartRequest());

				const payload = {
					cartItems: [{ product: product._id, quantity: qty }],
				};

				const res = await axios.post("/user/cart/addToCart", payload);
				if (res.status === 201) {
					dispatch(getCartItems());
				} else {
					const { error } = res.data;
					dispatch(addToCartFailure(error));
				}
			} else {
				localStorage.setItem("cart", JSON.stringify(cartItems));
			}

			dispatch(addToCartSuccess(cartItems));
		} catch (error) {
			console.log(error);
			dispatch(addToCartFailure(error));
		}
	};
};

export const updateCart = () => {
	return async (dispatch) => {
		try {
			const { auth } = store.getState();
			let cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;

			if (auth.authenticate) {
				localStorage.removeItem("cart");
				//dispatch(getCartItems());
				if (cartItems) {
					const payload = {
						cartItems: Object.keys(cartItems).map((key, index) => {
							return {
								quantity: cartItems[key].qty,
								product: cartItems[key]._id,
							};
						}),
					};
					if (Object.keys(cartItems).length > 0) {
						const res = await axios.post(`/user/cart/addtocart`, payload);
						if (res.status === 201) {
							dispatch(getCartItems());
						}
					}
				} else {
					dispatch(getCartItems());
					// localStorage.setItem("cart", JSON.stringify(cartItems));
				}
			} else {
				if (cartItems) {
					dispatch(addToCartSuccess(cartItems));
				}
			}
		} catch (error) {
			console.log(error);
			dispatch(addToCartFailure(error));
		}
	};
};

const getCartItems = () => {
	return async (dispatch) => {
		try {
			dispatch(addToCartRequest());
			const res = await axios.post(`/user/getCartItems`);

			if (res.status === 200) {
				const { cartItems } = res.data;
				// console.log({ getCartItems: cartItems });

				if (cartItems) {
					dispatch(addToCartSuccess(cartItems));
				} else {
					// additional code
					dispatch(addToCartFailure(new Error("No cart Items")));
				}
			}
		} catch (error) {
			console.log(error);
			dispatch(addToCartFailure(error));
		}
	};
};

export const removeCartItem = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(removeCartItemRequest());
			const res = await axios.post("/user/cart/removeItem", { payload });
			if (res.status === 202) {
				dispatch(getCartItems());
				dispatch(removeCartItemSuccess());
			} else {
				const { error } = res.data;
				console.log(error);
				dispatch(removeCartItemFailure(error));
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export { getCartItems };
