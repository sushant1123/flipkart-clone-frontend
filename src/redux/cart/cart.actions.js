import {
	ADD_TO_CART_REQUEST,
	ADD_TO_CART_SUCCESS,
	ADD_TO_CART_FAILURE,
	RESET_CART,
	REMOVE_CART_ITEM_REQUEST,
	REMOVE_CART_ITEM_SUCCESS,
	REMOVE_CART_ITEM_FAILURE,
} from "./cartConstants";

export const addToCartRequest = () => {
	return { type: ADD_TO_CART_REQUEST };
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

export const removeCartItemRequest = () => {
	return { type: REMOVE_CART_ITEM_REQUEST };
};

export const removeCartItemSuccess = () => {
	return {
		type: REMOVE_CART_ITEM_SUCCESS,
	};
};

export const removeCartItemFailure = (error) => {
	return {
		type: REMOVE_CART_ITEM_FAILURE,
		payload: { error },
	};
};

export const resetCart = () => {
	return { type: RESET_CART };
};
