import axios from "../../helpers/axios";
import { resetCart } from "../cart/cart.actions";
import {
	getUserAddressFailure,
	getUserAddressRequest,
	getUserAddressSuccess,
	addUserAddressFailure,
	addUserAddressRequest,
	addUserAddressSuccess,
	addUserOrderRequest,
	addUserOrderFailure,
	getUserOrdersRequest,
	getUserOrdersFailure,
	getUserOrdersSuccess,
	getUserOrdersDetailsFailure,
	getUserOrdersDetailsSuccess,
	getUserOrdersDetailsRequest,
	addUserOrderSuccess,
} from "./user.actions";

// address actions
export const getAddress = () => {
	return async (dispatch) => {
		try {
			dispatch(getUserAddressRequest());
			const res = await axios.post(`/user/getaddress`);
			if (res.status === 200) {
				const {
					userAddress: { address },
				} = res.data;
				dispatch(getUserAddressSuccess(address));
			} else {
				const { error } = res.data;
				dispatch(getUserAddressFailure(error));
			}
		} catch (error) {
			console.log(error);
			dispatch(getUserAddressFailure(error));
		}
	};
};

export const addAddress = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(addUserAddressRequest());
			const res = await axios.post(`/user/address/create`, { payload });
			if (res.status === 201) {
				console.log(res);
				const {
					address: { address },
				} = res.data;

				dispatch(addUserAddressSuccess(address));
			} else {
				const { error } = res.data;
				dispatch(addUserAddressFailure(error));
			}
		} catch (error) {
			console.log(error);
			dispatch(addUserAddressFailure(error));
		}
	};
};

//orders actions
export const getOrders = () => {
	return async (dispatch) => {
		try {
			dispatch(getUserOrdersRequest());
			const res = await axios.get(`/user/getOrders`);
			if (res.status === 200) {
				const { orders } = res.data;
				// console.log(orders);
				dispatch(getUserOrdersSuccess(orders));
			} else {
				const { error } = res.data;
				dispatch(getUserOrdersFailure(error));
			}
		} catch (error) {
			console.log(error);
			dispatch(getUserOrdersFailure(error));
		}
	};
};

export const addOrder = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(addUserOrderRequest());
			const res = await axios.post(`user/order/create`, payload);
			if (res.status === 201) {
				// console.log(res);
				const { order } = res.data;
				dispatch(resetCart());
				dispatch(addUserOrderSuccess(order));
			} else {
				const { error } = res.data;
				dispatch(addUserOrderFailure(error));
			}
		} catch (error) {
			console.log(error);
			dispatch(addUserOrderFailure(error));
		}
	};
};

export const getOrder = (payload) => {
	return async (dispatch) => {
		try {
			dispatch(getUserOrdersDetailsRequest());
			const res = await axios.post("/user/getOrder", payload);
			if (res.status === 200) {
				const { order } = res.data;
				dispatch(getUserOrdersDetailsSuccess(order));
			} else {
				const { error } = res.data;
				dispatch(getUserOrdersDetailsFailure(error));
			}
		} catch (error) {
			console.log(error);
			dispatch(getUserOrdersDetailsFailure(error));
		}
	};
};
