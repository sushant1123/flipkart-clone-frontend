import {
	addToCartRequest,
	addToCartFailure,
	addToCartSuccess,
} from "./cart.actions";

import store from "../store/store";

import axios from "../../helpers/axios";

export const addToCart = (product, newQty = 1) => {
	return async (dispatch) => {
		const {
			cart: { cartItems },
			auth,
		} = store.getState();
		// console.log("action::products", cartItems);
		const qty = cartItems[product._id]
			? parseInt(cartItems[product._id].qty + newQty)
			: 1;

		cartItems[product._id] = { ...product, qty };

		//if user is authenticated then add items to the cart
		if (auth.authenticate) {
			dispatch(addToCartRequest());

			const payload = {
				cartItems: [{ product: product._id, quantity: qty }],
			};

			const res = await axios.post("/user/cart/addToCart", payload);
			console.log(res);
			if (res.status === 201) {
				dispatch(getCartItems());
			}
		} else {
			localStorage.setItem("cart", JSON.stringify(cartItems));
		}

		console.log("addToCart::", cartItems);

		dispatch(addToCartSuccess(cartItems));
	};
};

export const updateCart = () => {
	return async (dispatch) => {
		const { auth } = store.getState();
		let cartItems = localStorage.getItem("cart")
			? JSON.parse(localStorage.getItem("cart"))
			: null;

		console.log("upppppppppp");

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
					const res = await axios.post(
						`/user/cart/addtocart`,
						payload
					);
					if (res.status === 201) {
						dispatch(getCartItems());
					}
				}
			} else {
				// dispatch(getCartItems());
				localStorage.setItem("cart", JSON.stringify(cartItems));
			}
		} else {
			if (cartItems) {
				dispatch(addToCartSuccess(cartItems));
			}
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
				console.log({ getCartItems: cartItems });

				if (cartItems) {
					dispatch(addToCartSuccess(cartItems));
				}
				// else {                   // additional code
				// 	dispatch(addToCartFailure());
				// }
			}
		} catch (error) {
			console.log(error);
			dispatch(addToCartFailure());
		}
	};
};

export { getCartItems };
