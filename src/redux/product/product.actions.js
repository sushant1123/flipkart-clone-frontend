import {
	GET_PRODUCTS_BY_SLUG_FAILURE,
	GET_PRODUCTS_BY_SLUG_REQUEST,
	GET_PRODUCTS_BY_SLUG_SUCCESS,
	GET_PRODUCT_DETAILS_BY_ID_FAILURE,
	GET_PRODUCT_DETAILS_BY_ID_REQUEST,
	GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
} from "./productConstants";

export const fetchProductsBySlugRequest = () => {
	return {
		type: GET_PRODUCTS_BY_SLUG_REQUEST,
	};
};

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

//fetch product details by id
export const fetchProductDetailsByIdRequest = () => {
	return {
		type: GET_PRODUCT_DETAILS_BY_ID_REQUEST,
	};
};

export const fetchProductDetailsByIdSuccess = (product) => {
	return {
		type: GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
		payload: { productDetails: product },
	};
};

export const fetchProductDetailsByIdFailure = (error) => {
	return {
		type: GET_PRODUCT_DETAILS_BY_ID_FAILURE,
		payload: { error },
	};
};
