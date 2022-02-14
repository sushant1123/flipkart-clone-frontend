import React from "react";
import Layout from "../../components/layout/Layout";

import "./productPageStyle.css";
import ProductStore from "./ProductStore/ProductStore";
import { useSearchParams } from "react-router-dom";
import { getParams } from "../../utils/getParams";
import ProductPage from "./productPage/ProductPage";

const ProductListPage = (props) => {
	const [searchParams] = useSearchParams();

	const renderProducts = () => {
		const [...params] = searchParams;
		const paramsObj = getParams(params);
		// console.log(paramsObj);
		let content = null;
		switch (paramsObj.type) {
			case "store":
				content = <ProductStore {...props} />;
				break;

			case "page":
				content = <ProductPage {...props} />;
				break;

			default:
				content = null;
				break;
		}

		return content;
	};

	return (
		<Layout>
			{/* <ProductStore {...props} /> */}
			{renderProducts()}
		</Layout>
	);
};

export default ProductListPage;
