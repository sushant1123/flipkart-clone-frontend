import {
	GET_PRODUCTS_BY_SLUG_SUCCESS,
	GET_PRODUCTS_BY_SLUG_FAILURE,
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
};

const productReducer = (state = initialProductState, action) => {
	// console.log(action.payload);

	switch (action.type) {
		case GET_PRODUCTS_BY_SLUG_SUCCESS:
			const { products, productsByPrice } = action.payload;
			// const {
			// 	under10k,
			// 	under15k,
			// 	under20k,
			// 	under40k,
			// 	under5k,
			// 	premiumPhones,
			// } = productsByPrice;
			state = {
				...state,
				loading: false,
				products: products,
				productsByPrice: {
					...productsByPrice,
					// under5k,
					// under10k,
					// under15k,
					// under20k,
					// under40k,
					// premiumPhones,
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

		default:
			break;
	}

	return state;
};

export default productReducer;
