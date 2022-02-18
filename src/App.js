import "./App.css";
import HomePage from "./containers/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./containers/productListPage/ProductListPage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isUserLoggedIn, updateCart } from "./redux/allAsyncActions/allAsyncActions";
import ProductDetailsPage from "./containers/productDetailsPage/ProductDetailsPage";
import CartPage from "./containers/cartPage/CartPage";
import CheckoutPage from "./containers/checkoutPage/CheckoutPage";
import OrderPage from "./containers/ordersPage/OrderPage";
import OrderDetailsPage from "./containers/ordersPage/orderDetailsPage/OrderDetailsPage";

function App() {
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!auth.authenticate) {
			dispatch(isUserLoggedIn());
		}
	}, [auth.authenticate]);

	useEffect(() => {
		console.log("App.js", "updateCart");
		dispatch(updateCart());
	}, [auth.authenticate]);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage />}></Route>
					<Route path="/cart" element={<CartPage />}></Route>
					<Route path="/checkout" element={<CheckoutPage />}></Route>
					<Route path="/account/orders" element={<OrderPage />}></Route>
					<Route path="/order_details/:orderId" element={<OrderDetailsPage />}></Route>
					<Route path="/:productSlug/:productId/p" element={<ProductDetailsPage />}></Route>
					<Route path="/:slug" element={<ProductListPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
