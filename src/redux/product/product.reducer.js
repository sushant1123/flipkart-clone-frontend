import {
	GET_PRODUCTS_BY_SLUG_SUCCESS,
	GET_PRODUCTS_BY_SLUG_FAILURE,
	GET_PRODUCT_DETAILS_BY_ID_FAILURE,
	GET_PRODUCT_DETAILS_BY_ID_REQUEST,
	GET_PRODUCT_DETAILS_BY_ID_SUCCESS,
} from "./productConstants";

const initialProductState = {
	loading: false,
	products: [],
	productsByPrice: {
		under5k: [],
		under10k: [],
		under15k: [],
		under20k: [],
		under40k: [],
		premiumPhones: [],
	},
	error: null,
	productDetails: {},
};

const productReducer = (state = initialProductState, action) => {
	console.log(action.payload);

	switch (action.type) {
		case GET_PRODUCTS_BY_SLUG_SUCCESS:
			const { products, productsByPrice } = action.payload;

			state = {
				...state,
				loading: false,
				products: products,
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
			break;
	}

	return state;
};

export default productReducer;
