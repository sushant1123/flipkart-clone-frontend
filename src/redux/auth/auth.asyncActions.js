import axios from "../../helpers/axios";
import {
	loginFailure,
	loginRequest,
	loginSuccess,
	logoutFailure,
	logoutRequest,
	logoutSuccess,
} from "./auth.actions";

export const login = (user) => {
	console.log(user);
	return async (dispatch) => {
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
	};
};

export const signout = () => {
	return async (dispatch) => {
		dispatch(logoutRequest());
		const res = await axios.post("/user/signout");

		if (res.status === 200) {
			//remove our data from localstorage
			localStorage.removeItem("token");
			localStorage.removeItem("user");

			//dispatch an action creator
			dispatch(logoutSuccess(res.data.message));
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
