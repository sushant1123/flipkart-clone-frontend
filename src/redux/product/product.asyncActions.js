import axios from "../../helpers/axios";
import {
	fetchProductDetailsByIdFailure,
	fetchProductDetailsByIdRequest,
	fetchProductDetailsByIdSuccess,
	fetchProductsBySlugFailure,
	fetchProductsBySlugRequest,
	fetchProductsBySlugSuccess,
} from "./product.actions";

export const getProductsBySlug = (slug) => {
	console.log(slug);
	return async (dispatch) => {
		dispatch(fetchProductsBySlugRequest());
		let res = await axios.get(`/products/${slug}`);
		// console.log(res);
		if (res.status === 200) {
			dispatch(fetchProductsBySlugSuccess(res.data));
		} else {
			dispatch(fetchProductsBySlugFailure(res.data.error));
		}
	};
};

export const getProductDetailsById = (payload) => {
	console.log(payload);
	return async (dispatch) => {
		let res;
		dispatch(fetchProductDetailsByIdRequest());
		try {
			const { productId } = payload.params;

			res = await axios.get(`/product/${productId}`);
			console.log(res);
			dispatch(fetchProductDetailsByIdSuccess(res.data.product));
		} catch (error) {
			console.log(error);
			dispatch(fetchProductDetailsByIdFailure(res.data.error));
		}
	};
};
