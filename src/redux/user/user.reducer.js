import {
	GET_USER_ADDRESS_FAILURE,
	GET_USER_ADDRESS_REQUEST,
	GET_USER_ADDRESS_SUCCESS,
	ADD_USER_ADDRESS_FAILURE,
	ADD_USER_ADDRESS_REQUEST,
	ADD_USER_ADDRESS_SUCCESS,
	ADD_USER_ORDER_REQUEST,
	ADD_USER_ORDER_SUCCESS,
	ADD_USER_ORDER_FAILURE,
	GET_USER_ORDER_REQUEST,
	GET_USER_ORDER_SUCCESS,
	GET_USER_ORDER_FAILURE,
} from "./userConstants";

const initialUserState = {
	loading: false,
	address: [],
	orders: [],
	orderFetching: false,
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

		case ADD_USER_ADDRESS_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case ADD_USER_ADDRESS_SUCCESS:
			state = {
				...state,
				loading: false,
				address: action.payload.address,
			};
			break;

		case ADD_USER_ADDRESS_FAILURE:
			state = {
				...state,
				loading: false,
				error: action.payload.error,
			};
			break;

		case ADD_USER_ORDER_REQUEST:
			state = {
				...state,
				loading: true,
			};
			break;

		case ADD_USER_ORDER_SUCCESS:
			state = {
				...state,
				loading: false,
				orders: [...state.orders, action.payload.order],
			};
			break;

		case ADD_USER_ORDER_FAILURE:
			state = {
				...state,
				loading: false,
				error: action.payload.error,
			};
			break;

		case GET_USER_ORDER_REQUEST:
			state = {
				...state,
				orderFetching: true,
			};
			break;

		case GET_USER_ORDER_SUCCESS:
			state = {
				...state,
				orderFetching: false,
				orders: action.payload.orders,
			};
			break;

		case GET_USER_ORDER_FAILURE:
			state = {
				...state,
				orderFetching: false,
				error: action.payload.error,
			};
			break;

		default:
			state = { ...state };
			break;
	}

	return state;
};

export default userReducer;
