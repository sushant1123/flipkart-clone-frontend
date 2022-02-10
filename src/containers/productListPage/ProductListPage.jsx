import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { getProductsBySlug } from "../../redux/allAsyncActions/allAsyncActions";

const ProductListPage = (props) => {
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		dispatch(getProductsBySlug(params.slug));
	}, []);

	return (
		<Layout>
			<div>ProductListPage</div>;
		</Layout>
	);
};

export default ProductListPage;
