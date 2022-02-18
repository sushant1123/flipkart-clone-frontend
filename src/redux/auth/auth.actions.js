import {
	LOGIN_FAILURE,
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOGOUT_FAILURE,
	LOGOUT_REQUEST,
	LOGOUT_SUCCESS,
	SIGNUP_FAILURE,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
} from "./authConstants";

export const loginRequest = () => {
	return {
		type: LOGIN_REQUEST,
	};
};

export const loginSuccess = (token, user) => {
	return {
		type: LOGIN_SUCCESS,
		payload: { token, user },
	};
};

export const loginFailure = (error) => {
	return {
		type: LOGIN_FAILURE,
		payload: { error },
	};
};

export const logoutSuccess = (message) => {
	return {
		type: LOGOUT_SUCCESS,
		payload: {
			message,
		},
	};
};

export const logoutRequest = () => {
	return {
		type: LOGOUT_REQUEST,
	};
};

export const logoutFailure = (error) => {
	return {
		type: LOGOUT_FAILURE,
		payload: { error },
	};
};

export const signupRequest = () => {
	return {
		type: SIGNUP_REQUEST,
	};
};

export const signupSuccess = () => {
	return {
		type: SIGNUP_SUCCESS,
	};
};

export const signupFailure = () => {
	return {
		type: SIGNUP_FAILURE,
	};
};
