import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { getProductsBySlug } from "../../redux/allAsyncActions/allAsyncActions";
import { generatePublicURL } from "../../helpers/urlConfig";
import "./productPageStyle.css";

const ProductListPage = (props) => {
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const priceRange = {
		under5k: 5000,
		under10k: 10000,
		under15k: 15000,
		under20k: 20000,
		under40k: 40000,
		premiumPhones: "Premium Mobiles",
	};
	const params = useParams();

	useEffect(() => {
		// console.log(params);
		dispatch(getProductsBySlug(params.slug));
	}, []);

	return (
		<Layout>
			{/* <div>ProductListPage</div>; */}
			{Object.keys(product.productsByPrice).map((key, index) => {
				return (
					<div className="card" key={index}>
						<div className="cardHeader">
							<div>
								{/* {`${params.slug} Mobiles under ₹${priceRange[key]}`} */}
								{`${params.slug} ${
									key.includes("under")
										? `mobiles under ₹${priceRange[key]}`
										: priceRange[key]
								}`}
							</div>
							<button>View All</button>
						</div>
						<div className="product">
							{product.productsByPrice[key].map(
								(product, index) => {
									return (
										<div
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
										</div>
									);
								}
							)}
						</div>
					</div>
				);
			})}
		</Layout>
	);
};

export default ProductListPage;
