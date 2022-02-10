import {
	FETCH_CATEGORY_FAILURE,
	FETCH_CATEGORY_SUCCESS,
	FETCH_CATEGORY_REQUEST,
} from "./categoryConstants";

const initialCategoryState = {
	loading: false,
	categories: [],
	error: null,
};

const categoryReducer = (state = initialCategoryState, action) => {
	switch (action.type) {
		case FETCH_CATEGORY_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case FETCH_CATEGORY_SUCCESS:
			state = {
				...state,
				loading: false,
				categories: action.payload.categories,
				error: null,
			};
			break;

		case FETCH_CATEGORY_FAILURE:
			state = {
				...state,
				loading: false,
				categories: [],
				error: action.payload,
			};
			break;

		default:
			break;
	}

	return state;
};

export default categoryReducer;
