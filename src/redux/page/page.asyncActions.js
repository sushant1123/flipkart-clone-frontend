import axios from "../../helpers/axios";
import { fetchProductPageFailure, fetchProductPageSuccess, fetchProductPageRequest } from "./page.actions";

export const getProductPage = (payload) => {
	return async (dispatch) => {
		try {
			const { cid, type } = payload.params;

			dispatch(fetchProductPageRequest());
			let res = await axios.get(`/page/${cid}/${type}`);
			// console.log(res);

			if (res.status === 200) {
				const { page } = res.data;
				dispatch(fetchProductPageSuccess(page));
			} else {
				const { error } = res.data;
				dispatch(fetchProductPageFailure(error));
			}
		} catch (error) {
			console.log(error);
			dispatch(fetchProductPageFailure(error));
		}
	};
};
