import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getProductPage } from "../../../redux/allAsyncActions/allAsyncActions";
import { getParams } from "../../../utils/getParams";
import { Row, Col } from "react-bootstrap";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

//css
import "./ProductPage.css";
import Card from "../../../components/UI/card/Card";

const ProductPage = () => {
	const pageState = useSelector((state) => state.page);
	const { page } = pageState;
	const dispatch = useDispatch();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const params = getParams([...searchParams]);
		console.log("in productpage", params);
		const payload = {
			params: {
				cid: params.cid,
				type: params.type,
			},
		};
		dispatch(getProductPage(payload));
	}, []);

	return (
		<div className="mainDiv">
			<h3>{page.title}</h3>
			<Carousel renderThumbs={() => []}>
				{page.banners &&
					page.banners.map((banner, index) => {
						return (
							<a
								href={banner.navigateTo}
								key={index}
								style={{ display: "block" }}
							>
								<img src={banner.img} alt="" height={"320px"} />
							</a>
						);
					})}
			</Carousel>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					margin: "5px",
				}}
			>
				{page.products &&
					page.products.map((product, index) => {
						return (
							<Card
								key={index}
								style={{
									width: "350px",
									height: "250px",
									margin: "0 15px",
								}}
							>
								<img
									src={product.img}
									alt=""
									style={{ width: "100%", height: "100%" }}
								/>
							</Card>
						);
					})}
			</div>
		</div>
	);
};

export default ProductPage;
