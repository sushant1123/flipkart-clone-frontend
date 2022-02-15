import {
	GET_USER_ADDRESS_FAILURE,
	GET_USER_ADDRESS_REQUEST,
	GET_USER_ADDRESS_SUCCESS,
	ADD_USER_ADDRESS_FAILURE,
	ADD_USER_ADDRESS_REQUEST,
	ADD_USER_ADDRESS_SUCCESS,
} from "./userConstants";

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

export const addUserAddressSuccess = () => {
	return {
		type: ADD_USER_ADDRESS_SUCCESS,
	};
};

export const addUserAddressFailure = () => {
	return {
		type: ADD_USER_ADDRESS_FAILURE,
	};
};
