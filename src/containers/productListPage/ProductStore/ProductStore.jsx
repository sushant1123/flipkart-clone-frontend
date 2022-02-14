import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsBySlug } from "../../../redux/allAsyncActions/allAsyncActions";
import { generatePublicURL } from "../../../helpers/urlConfig";
import { Link } from "react-router-dom";
import Card from "../../../components/UI/card/Card";

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
							key.includes("under")
								? `mobiles under ₹${priceRange[key]}`
								: priceRange[key]
						}`}
						headerRight={<button>View All</button>}
						style={{
							width: "calc(100% - 45px)",
							margin: "20px",
						}}
					>
						<div className="product">
							{product.productsByPrice[key].map(
								(product, index) => {
									return (
										<Link
											to={`/${product.slug}/${product._id}/p`}
											style={{ display: "block" }}
											className="productContainer"
											key={index}
										>
											<div className="productImgContainer">
												<img
													src={generatePublicURL(
														product
															.productPictures[0]
															.img
													)}
													alt={product.name}
												/>
											</div>
											<div className="productInfo">
												<div className="productTitle">
													{product.name}
												</div>
												<div>
													<span>4.5</span>{" "}
													&nbsp;&nbsp;
													<span>5003</span>
												</div>
												<div className="productPrice">
													{product.price}
												</div>
											</div>
										</Link>
									);
								}
							)}
						</div>
					</Card>
				);
			})}
		</>
	);
};

export default ProductStore;
