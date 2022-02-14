import {
	ADD_TO_CART_REQUEST,
	ADD_TO_CART_FAILURE,
	ADD_TO_CART_SUCCESS,
} from "./cartConstants";

const initialCartState = {
	cartItems: {},
	loading: false,
	error: null,
};

const categoryReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ADD_TO_CART_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case ADD_TO_CART_SUCCESS:
			state = {
				...state,
				loading: false,
				cartItems: action.payload.cartItems,
			};
			break;

		case ADD_TO_CART_FAILURE:
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

export default categoryReducer;
