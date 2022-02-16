import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../redux/allAsyncActions/allAsyncActions";
import Card from "../../../components/UI/card/Card";
import { BiRupee } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

import "./style.css";
import { generatePublicURL } from "../../../helpers/urlConfig";

const ClothingAndAccessories = (props) => {
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const params = useParams();

	useEffect(() => {
		const { slug } = params;
		dispatch(getProductsBySlug(slug));
	}, []);

	return (
		<div style={{ padding: "10px" }}>
			<Card
				style={{
					boxSizing: "border-box",
					padding: "10px",
					display: "flex",
				}}
			>
				{product.products.map((product, index) => (
					<div className="caContainer" key={index}>
						<Link className="caImgContainer" to={`/${product.slug}/${product._id}/p`}>
							<img src={generatePublicURL(product.productPictures[0].img)} alt="" />
						</Link>
						<div>
							<div className="caProductName">{product.name}</div>
							<div className="caProductPrice">
								<BiRupee />
								{product.price}
							</div>
						</div>
					</div>
				))}
			</Card>
		</div>
	);
};

export default ClothingAndAccessories;
