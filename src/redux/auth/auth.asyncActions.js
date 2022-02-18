import axios from "../../helpers/axios";
import { resetCart } from "../cart/cart.actions";
import {
	loginFailure,
	loginRequest,
	loginSuccess,
	logoutFailure,
	logoutRequest,
	logoutSuccess,
	signupFailure,
	signupRequest,
	signupSuccess,
} from "./auth.actions";

export const login = (user) => {
	console.log(user);
	return async (dispatch) => {
		try {
			//dispatching login request action

			dispatch(loginRequest());
			//make a call to backend
			const res = await axios.post("/user/signin", user);

			if (res.status === 200) {
				const { token, user } = res.data;

				//storing date in localstorage
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(user));

				//dispatching success action
				dispatch(loginSuccess(token, user));
			} else if (res.status === 400) {
				//dispatching failure action
				dispatch(loginFailure(res.data.error));
			}
		} catch (error) {
			console.log(error);
			dispatch(loginFailure(error));
		}
	};
};

export const signout = () => {
	return async (dispatch) => {
		dispatch(logoutRequest());
		const res = await axios.post("/user/signout");

		if (res.status === 200) {
			//remove our data from localstorage
			// localStorage.removeItem("token");
			// localStorage.removeItem("user");
			localStorage.clear();

			//dispatch an action creator
			dispatch(logoutSuccess(res.data.message));
			dispatch(resetCart());
		} else {
			dispatch(logoutFailure(res.data.error));
		}
	};
};

export const isUserLoggedIn = () => {
	return async (dispatch) => {
		const token = localStorage.getItem("token");
		if (token) {
			const user = JSON.parse(localStorage.getItem("user"));
			dispatch(loginSuccess(token, user));
		} else {
			dispatch(loginFailure("failed to login"));
		}
	};
};

export const signupAction = (user) => {
	return async (dispatch) => {
		try {
			dispatch(signupRequest());
			const res = await axios.post("/user/signup", user);

			if (res.status === 201) {
				dispatch(signupSuccess());
				const { token, user } = res.data;

				//save user and token in the localstorage
				localStorage.setItem("token", token);
				localStorage.setItem("user", JSON.stringify(user));

				//dispatch login success action to the reducer
				dispatch(loginSuccess(token, user));
			} else {
				dispatch(signupFailure());
			}
		} catch (error) {
			dispatch(signupFailure());
			console.log(error);
		}
	};
};
