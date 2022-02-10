import {
	GET_PRODUCTS_BY_SLUG_SUCCESS,
	GET_PRODUCTS_BY_SLUG_FAILURE,
} from "./productConstants";

const initialProductState = {
	loading: false,
	products: [],
	productsByPrice: {},
	error: null,
};

const productReducer = (state = initialProductState, action) => {
	// console.log(action.payload);

	switch (action.type) {
		case GET_PRODUCTS_BY_SLUG_SUCCESS:
			const { products, productsByPrice } = action.payload;
			state = {
				...state,
				loading: false,
				products: products,
				productsByPrice: productsByPrice,
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

		default:
			break;
	}

	return state;
};

export default productReducer;
