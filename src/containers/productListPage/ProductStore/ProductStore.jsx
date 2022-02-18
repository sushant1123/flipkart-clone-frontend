import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../../../redux/allAsyncActions/allAsyncActions";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/card/Card";
import Price from "../../../components/Price";
import Rating from "../../../components/Rating";
import { MaterialButton } from "../../../components/materialUI/MaterialUI";

const ProductStore = (props) => {
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const priceRangeObj = {
		under5k: 5000,
		under10k: 10000,
		under15k: 15000,
		under20k: 20000,
		under40k: 40000,
		premiumPhones: "Premium Mobiles",
	};

	const [priceRange, setPriceRange] = useState(priceRangeObj);
	const params = useParams();

	useEffect(() => {
		// console.log(params);
		dispatch(getProductsBySlug(params.slug));
	}, []);
	return (
		<>
			{Object.keys(product.productsByPrice).map((key, index) => {
				return (
					<Card
						key={index}
						headerLeft={`${params.slug.split("-")[0]} ${
							key.includes("under") ? `mobiles under ₹${priceRange[key]}` : priceRange[key]
						}`}
						headerRight={<MaterialButton title="View All" bgColor="#2874f0" />}
						style={{
							width: "calc(100% - 45px)",
							margin: "20px",
						}}
					>
						<div className="product">
							{product.productsByPrice[key].map((product, index) => {
								return (
									<Link
										to={`/${product.slug}/${product._id}/p`}
										style={{ display: "block", textDecoration: "none" }}
										className="productContainer"
										key={index}
									>
										<div className="productImgContainer">
											<img src={product.productPictures[0].img} alt={product.name} />
										</div>
										<div className="productInfo">
											<div className="productTitle" style={{ fontSize: "14px" }}>
												{product.name}
											</div>
											<div style={{}}>
												<Rating value={"4.5"} /> &nbsp; &nbsp;
												<span style={{ color: "gray" }}>(5003)</span>
											</div>
											<br />
											<Price value={product.price} />
										</div>
									</Link>
								);
							})}
						</div>
					</Card>
				);
			})}
		</>
	);
};

export default ProductStore;
