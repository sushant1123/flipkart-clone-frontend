import axios from "axios";
import { logoutSuccess } from "../redux/auth/auth.actions";
import store from "../redux/store/store";
import { API } from "./urlConfig";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
	baseURL: API,
	headers: {
		Authorization: token ? `Bearer ${token}` : "",
	},
});

axiosInstance.interceptors.request.use((req) => {
	const { auth } = store.getState();
	if (auth.token) {
		req.headers.Authorization = `Bearer ${auth.token}`;
	}
	return req;
});

axiosInstance.interceptors.response.use(
	(res) => {
		return res;
	},
	(error) => {
		console.log(error.response);
		const status = error.response ? error.response.status : 500;
		if (status && status === 500) {
			localStorage.clear("token");
			localStorage.clear("user");
			store.dispatch(logoutSuccess());
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
