import axios from "../../helpers/axios";
import {
	getUserAddressFailure,
	getUserAddressRequest,
	getUserAddressSuccess,
	addUserAddressFailure,
	addUserAddressRequest,
	addUserAddressSuccess,
} from "./user.actions";

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
				// const {
				// 	address: { address },
				// } = res.data;
				// dispatch(addUserAddressSuccess(address));
			} else {
				const { error } = res.data;
				dispatch(addUserAddressFailure(error));
			}
		} catch (error) {
			console.log(error);
		}
	};
};
