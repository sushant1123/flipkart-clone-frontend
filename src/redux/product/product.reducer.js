import {
	GET_PRODUCTS_BY_SLUG_SUCCESS,
	GET_PRODUCTS_BY_SLUG_REQUEST,
	GET_PRODUCTS_BY_SLUG_FAILURE,
	GET_PRODUCT_DETAILS_BY_ID_FAILURE,
	GET_PRODUCT_DETAILS_BY_ID_REQUEST,
	GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
} from "./productConstants";

const initialProductState = {
	loading: false,
	products: [],
	productsByPrice: {},
	priceRange: {},
	error: null,
	productDetails: {},
};

const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case GET_PRODUCTS_BY_SLUG_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case GET_PRODUCTS_BY_SLUG_SUCCESS:
			const { products, productsByPrice, priceRange } = action.payload;

			state = {
				...state,
				loading: false,
				products: products,
				priceRange: priceRange,
				productsByPrice: {
					...productsByPrice,
				},
			};
			break;

		case GET_PRODUCTS_BY_SLUG_FAILURE:
			state = {
				...state,
				loading: false,
				products: state.products,
				productsByPrice: state.productsByPrice,
				error: action.payload.error,
			};
			break;

		case GET_PRODUCT_DETAILS_BY_ID_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
			state = {
				...state,
				loading: false,
				productDetails: action.payload.productDetails,
			};
			break;

		case GET_PRODUCT_DETAILS_BY_ID_FAILURE:
			state = {
				...state,
				loading: false,
				error: action.payload.error,
			};
			break;

		default:
			state = { ...state };
			break;
	}

	return state;
};

export default productReducer;
