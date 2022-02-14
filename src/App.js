import "./App.css";
import HomePage from "./containers/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./containers/productListPage/ProductListPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	isUserLoggedIn,
	updateCart,
} from "./redux/allAsyncActions/allAsyncActions";
import ProductDetailsPage from "./containers/productDetailsPage/ProductDetailsPage";
import CartPage from "./containers/cartPage/CartPage";

function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	}, [auth.authenticate]);

	useEffect(() => {
		dispatch(updateCart());
	}, []);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/cart" element={<CartPage />}></Route>
					<Route
						path="/:productSlug/:productId/p"
						element={<ProductDetailsPage />}
					></Route>
					<Route path="/:slug" element={<ProductListPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
