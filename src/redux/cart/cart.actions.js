import {
	ADD_TO_CART_REQUEST,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILURE,
} from "./cartConstants";

export const addToCartRequest = () => {
	return {
		type: ADD_TO_CART_REQUEST,
	};
};

export const addToCartSuccess = (cartItems) => {
	return {
		type: ADD_TO_CART_SUCCESS,
		payload: { cartItems },
	};
};

export const addToCartFailure = (error) => {
	return {
		type: ADD_TO_CART_FAILURE,
		payload: { error },
	};
};
