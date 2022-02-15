import {
	ADD_TO_CART_REQUEST,
	ADD_TO_CART_FAILURE,
	ADD_TO_CART_SUCCESS,
	RESET_CART,
} from "./cartConstants";

const initialCartState = {
	cartItems: {},
	updatingCart: false,
	error: null,
};

const categoryReducer = (state = initialCartState, action) => {
	switch (action.type) {
		case ADD_TO_CART_REQUEST:
			state = {
				...state,
				updatingCart: true,
			};
			break;

		case ADD_TO_CART_SUCCESS:
			state = {
				...state,
				updatingCart: false,
				cartItems: action.payload.cartItems,
			};
			break;

		case ADD_TO_CART_FAILURE:
			state = {
				...state,
				updatingCart: false,
				error: action.payload.error,
			};
			break;

		case RESET_CART:
			state = {
				...initialCartState,
			};
			break;

		default:
			state = { ...state };
			break;
	}

	return state;
};

export default categoryReducer;
