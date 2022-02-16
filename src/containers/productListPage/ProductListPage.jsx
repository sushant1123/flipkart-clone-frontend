import React from "react";
import Layout from "../../components/layout/Layout";

import "./productPageStyle.css";
import ProductStore from "./ProductStore/ProductStore";
import { useSearchParams } from "react-router-dom";
import { getParams } from "../../utils/getParams";
import ProductPage from "./productPage/ProductPage";
import ClothingAndAccessories from "./clothingAndAccessories/ClothingAndAccessories";

const ProductListPage = (props) => {
	const [searchParams] = useSearchParams();

	const renderProducts = () => {
		const [...params] = searchParams;
		const paramsObj = getParams(params);

		let content = null;
		switch (paramsObj.type) {
			case "store":
				content = <ProductStore {...props} />;
				break;

			case "page":
				content = <ProductPage {...props} />;
				break;

			default:
				content = <ClothingAndAccessories {...props} />;
				break;
		}

		return content;
	};

	return <Layout>{renderProducts()}</Layout>;
};

export default ProductListPage;
