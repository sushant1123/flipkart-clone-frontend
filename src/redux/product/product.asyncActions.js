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
		try {
			dispatch(fetchProductsBySlugRequest());
			let res = await axios.get(`/products/${slug}`);
			// console.log(res);
			if (res.status === 200) {
				dispatch(fetchProductsBySlugSuccess(res.data));
			} else {
				dispatch(fetchProductsBySlugFailure(res.data.error));
			}
		} catch (error) {
			console.log(error);
			dispatch(fetchProductsBySlugFailure(error));
		}
	};
};

export const getProductDetailsById = (payload) => {
	return async (dispatch) => {
		let res;
		try {
			dispatch(fetchProductDetailsByIdRequest());
			const { productId } = payload.params;

			res = await axios.get(`/product/${productId}`);
			const { product } = res.data;
			dispatch(fetchProductDetailsByIdSuccess(product));
		} catch (error) {
			console.log(error);
			dispatch(fetchProductDetailsByIdFailure(res.data.error));
		}
	};
};
