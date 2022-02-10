import {
	FETCH_CATEGORY_FAILURE,
	FETCH_CATEGORY_REQUEST,
	FETCH_CATEGORY_SUCCESS,
} from "./categoryConstants";

export const fetchCategoryRequest = () => {
	return {
		type: FETCH_CATEGORY_REQUEST,
	};
};

export const fetchCategorySuccess = (categories) => {
	return {
		type: FETCH_CATEGORY_SUCCESS,
		payload: { categories },
	};
};

export const fetchCategoryFailure = (errorMsg) => {
	return {
		type: FETCH_CATEGORY_FAILURE,
		payload: { error: errorMsg },
	};
};
