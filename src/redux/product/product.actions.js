import {
	GET_PRODUCTS_BY_SLUG_FAILURE,
	GET_PRODUCTS_BY_SLUG_SUCCESS,
} from "./productConstants";

export const fetchProductsBySlugSuccess = (productList) => {
	return {
		type: GET_PRODUCTS_BY_SLUG_SUCCESS,
		payload: productList,
	};
};

export const fetchProductsBySlugFailure = (errorMsg) => {
	return {
		type: GET_PRODUCTS_BY_SLUG_FAILURE,
		payload: { error: errorMsg },
	};
};
