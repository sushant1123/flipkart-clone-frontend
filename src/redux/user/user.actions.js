import {
	GET_USER_ADDRESS_FAILURE,
	GET_USER_ADDRESS_REQUEST,
	GET_USER_ADDRESS_SUCCESS,
	ADD_USER_ADDRESS_FAILURE,
	ADD_USER_ADDRESS_REQUEST,
	ADD_USER_ADDRESS_SUCCESS,
	ADD_USER_ORDER_REQUEST,
	ADD_USER_ORDER_SUCCESS,
	ADD_USER_ORDER_FAILURE,
	GET_USER_ORDER_REQUEST,
	GET_USER_ORDER_SUCCESS,
	GET_USER_ORDER_FAILURE,
	GET_USER_ORDER_DETAILS_REQUEST,
	GET_USER_ORDER_DETAILS_SUCCESS,
	GET_USER_ORDER_DETAILS_FAILURE,
} from "./userConstants";

//address actions
export const getUserAddressRequest = () => {
	return {
		type: GET_USER_ADDRESS_REQUEST,
	};
};

export const getUserAddressSuccess = (address) => {
	return {
		type: GET_USER_ADDRESS_SUCCESS,
		payload: { address },
	};
};

export const getUserAddressFailure = (error) => {
	return {
		type: GET_USER_ADDRESS_FAILURE,
		payload: { error },
	};
};

export const addUserAddressRequest = () => {
	return {
		type: ADD_USER_ADDRESS_REQUEST,
	};
};

export const addUserAddressSuccess = (address) => {
	return {
		type: ADD_USER_ADDRESS_SUCCESS,
		payload: { address },
	};
};

export const addUserAddressFailure = () => {
	return {
		type: ADD_USER_ADDRESS_FAILURE,
	};
};

//order actions
export const getUserOrdersRequest = () => {
	return {
		type: GET_USER_ORDER_REQUEST,
	};
};

export const getUserOrdersSuccess = (orders) => {
	return {
		type: GET_USER_ORDER_SUCCESS,
		payload: { orders },
	};
};

export const getUserOrdersFailure = (error) => {
	return {
		type: GET_USER_ORDER_FAILURE,
		payload: { error },
	};
};

export const addUserOrderRequest = () => {
	return {
		type: ADD_USER_ORDER_REQUEST,
	};
};

export const addUserOrderSuccess = (order) => {
	return {
		type: ADD_USER_ORDER_SUCCESS,
		payload: { order },
	};
};

export const addUserOrderFailure = (error) => {
	return {
		type: ADD_USER_ORDER_FAILURE,
		payload: { error },
	};
};

//get user order details req.
export const getUserOrdersDetailsRequest = () => {
	return {
		type: GET_USER_ORDER_DETAILS_REQUEST,
	};
};

export const getUserOrdersDetailsSuccess = (order) => {
	return {
		type: GET_USER_ORDER_DETAILS_SUCCESS,
		payload: { order },
	};
};

export const getUserOrdersDetailsFailure = (error) => {
	return {
		type: GET_USER_ORDER_DETAILS_FAILURE,
		payload: { error },
	};
};
