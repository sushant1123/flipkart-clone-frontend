import axios from "../../helpers/axios";
import {
	fetchProductsBySlugFailure,
	fetchProductsBySlugSuccess,
} from "./product.actions";

export const getProductsBySlug = (slug) => {
	// console.log(slug);
	return async (dispatch) => {
		let res = await axios.get(`/products/${slug}`);
		// console.log(res);
		if (res.status === 200) {
			dispatch(fetchProductsBySlugSuccess(res.data));
		} else {
			dispatch(fetchProductsBySlugFailure(res.data.error));
		}
		// console.log(res);
	};
};
