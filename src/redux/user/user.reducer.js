import {
	GET_USER_ADDRESS_FAILURE,
	GET_USER_ADDRESS_REQUEST,
	GET_USER_ADDRESS_SUCCESS,
	ADD_USER_ADDRESS_FAILURE,
	ADD_USER_ADDRESS_REQUEST,
	ADD_USER_ADDRESS_SUCCESS,
} from "./userConstants";

const initialUserState = {
	loading: false,
	address: [],
	error: null,
};

const userReducer = (state = initialUserState, action) => {
	// console.log(action.payload);

	switch (action.type) {
		case GET_USER_ADDRESS_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case GET_USER_ADDRESS_SUCCESS:
			state = {
				...state,
				loading: false,
				address: action.payload.address,
			};
			break;

		case GET_USER_ADDRESS_FAILURE:
			state = {
				...state,
				loading: false,
				error: action.payload.error,
			};
			break;

		// case ADD_USER_ADDRESS_REQUEST:
		// 	state = {
		// 		...state,
		// 		loading: false,
		// 		productDetails: action.payload.productDetails,
		// 	};
		// 	break;

		default:
			state = { ...state };
			break;
	}

	return state;
};

export default userReducer;