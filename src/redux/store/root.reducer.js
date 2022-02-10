import { combineReducers } from "redux";
import categoryReducer from "../category/category.reducer";
import productReducer from "../product/product.reducer";

const rootReducer = combineReducers({
	category: categoryReducer,
	product: productReducer,
});

export default rootReducer;
