import { combineReducers } from "redux";
import categoryReducer from "../category/category.reducer";
import productReducer from "../product/product.reducer";
import pageReducer from "../page/page.reducer";
import authReducer from "../auth/auth.reducer";
import cartReducer from "../cart/cart.reducer";
import userReducer from "../user/user.reducer";

const rootReducer = combineReducers({
	category: categoryReducer,
	product: productReducer,
	page: pageReducer,
	auth: authReducer,
	cart: cartReducer,
	user: userReducer,
});

export default rootReducer;
