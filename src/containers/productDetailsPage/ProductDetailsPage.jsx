import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { getProductDetailsById } from "../../redux/allAsyncActions/allAsyncActions";
import { IoIosArrowForward, IoIosStar, IoMdCart } from "react-icons/io";
import { BiRupee } from "react-icons/bi";
import { AiFillThunderbolt } from "react-icons/ai";
import { MaterialButton } from "../../components/materialUI/MaterialUI";
import { generatePublicURL } from "../../helpers/urlConfig";
import { addToCart } from "../../redux/allAsyncActions/allAsyncActions";

import "./style.css";

const ProductDetailsPage = (props) => {
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const product = useSelector((state) => state.product);

	useEffect(() => {
		const { productId } = params;
		const payload = {
			params: {
				productId,
			},
		};
		dispatch(getProductDetailsById(payload));
	}, []);

	if (Object.keys(product.productDetails).length === 0) {
		return null;
	}

	const handleAddToCartRequest = () => {
		const { name, _id, price } = product.productDetails;
		const img = product.productDetails.productPictures[0].img;
		const productObj = {
			name,
			_id,
			price,
			img: generatePublicURL(img),
		};
		// console.log(name, _id, price, generatePublicURL(img));
		console.log(productObj);
		dispatch(addToCart(productObj));

		navigate("/cart");
	};

	return (
		<Layout>
			{/* <div>{JSON.stringify(product.productDetails.name)}</div>; */}
			<div className="productDescriptionContainer">
				<div className="flexRow">
					<div className="verticalImageStack">
						{product.productDetails.productPictures.map(
							(thumb, index) => (
								<div className="thumbnail" key={index}>
									<img
										src={generatePublicURL(thumb.img)}
										alt={thumb.img}
									/>
								</div>
							)
						)}
					</div>
					<div className="productDescContainer">
						<div className="productDescImgContainer">
							<img
								src={generatePublicURL(
									product.productDetails.productPictures[0]
										.img
								)}
								alt={`${product.productDetails.productPictures[0].img}`}
							/>
						</div>

						{/* action buttons */}
						<div className="flexRow">
							<MaterialButton
								title="ADD TO CART"
								bgColor="#ff9f00"
								textColor="#ffffff"
								style={{
									marginRight: "5px",
								}}
								icon={<IoMdCart />}
								onClick={handleAddToCartRequest}
							/>
							<MaterialButton
								title="BUY NOW"
								bgColor="#fb641b"
								textColor="#ffffff"
								style={{
									marginLeft: "5px",
								}}
								icon={<AiFillThunderbolt />}
							/>
						</div>
					</div>
				</div>

				<div>
					{/* home > category > subCategory > productName */}
					<div className="breed">
						<ul>
							<li>
								<a href="#">Home</a>
								<IoIosArrowForward />
							</li>
							<li>
								<a href="#">Mobiles</a>
								<IoIosArrowForward />
							</li>
							<li>
								<a href="#">Samsung</a>
								<IoIosArrowForward />
							</li>
							<li>
								<a href="#">{product.productDetails.name}</a>
							</li>
						</ul>
					</div>
					{/* product description */}
					<div className="productDetails">
						<p className="productTitle">
							{product.productDetails.name}
						</p>
						<div>
							<span className="ratingCount">
								4.3 <IoIosStar />
							</span>
							<span className="ratingNumbersReviews">
								72,234 Ratings & 8,140 Reviews
							</span>
						</div>
						<div className="extraOffer">
							Extra <BiRupee />
							4500 off{" "}
						</div>
						<div className="flexRow priceContainer">
							<span className="price">
								<BiRupee />
								{product.productDetails.price}
							</span>
							<span
								className="discount"
								style={{ margin: "0 10px" }}
							>
								22% off
							</span>
							{/* <span>i</span> */}
						</div>
						<div>
							<p
								style={{
									color: "#212121",
									fontSize: "14px",
									fontWeight: "600",
								}}
							>
								Available Offers
							</p>
							<p style={{ display: "flex" }}>
								<span
									style={{
										width: "100px",
										fontSize: "12px",
										color: "#878787",
										fontWeight: "600",
										marginRight: "20px",
									}}
								>
									Description
								</span>
								<span
									style={{
										fontSize: "14px",
										color: "#212121",
									}}
								>
									{product.productDetails.description}
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default ProductDetailsPage;
