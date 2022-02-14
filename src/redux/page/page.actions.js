import {
	GET_PRODUCT_PAGE_FAILURE,
	GET_PRODUCT_PAGE_REQUEST,
	GET_PRODUCT_PAGE_SUCCESS,
} from "./pageConstants";

export const fetchProductPageRequest = () => {
	return {
		type: GET_PRODUCT_PAGE_REQUEST,
	};
};

export const fetchProductPageSuccess = (page) => {
	return {
		type: GET_PRODUCT_PAGE_SUCCESS,
		payload: { page },
	};
};

export const fetchProductPageFailure = (error) => {
	return {
		type: GET_PRODUCT_PAGE_FAILURE,
		payload: { error },
	};
};
