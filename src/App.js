import "./App.css";
// import { useSelector } from "react-redux";
import HomePage from "./containers/homePage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductListPage from "./containers/productListPage/ProductListPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/:slug" element={<ProductListPage />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
