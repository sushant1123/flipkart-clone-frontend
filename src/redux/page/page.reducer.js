import {
	GET_PRODUCT_PAGE_FAILURE,
	GET_PRODUCT_PAGE_REQUEST,
	GET_PRODUCT_PAGE_SUCCESS,
} from "./pageConstants";

const initialProductPageState = {
	pageRequest: false,
	page: {},
	error: null,
};

const pageReducer = (state = initialProductPageState, action) => {
	switch (action.type) {
		case GET_PRODUCT_PAGE_REQUEST:
			state = {
				...state,
				pageRequest: true,
			};
			break;

		case GET_PRODUCT_PAGE_SUCCESS:
			state = {
				...state,

				pageRequest: false,
				page: action.payload.page,
				error: null,
			};
			break;

		case GET_PRODUCT_PAGE_FAILURE:
			state = {
				...state,

				pageRequest: false,
				error: action.payload.error,
			};
			break;

		default:
			break;
	}

	return state;
};

export default pageReducer;
