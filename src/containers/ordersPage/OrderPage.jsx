import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrders } from "../../redux/allAsyncActions/allAsyncActions";
import Layout from "../../components/layout/Layout";
import Card from "../../components/UI/card/Card";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";

import "./style.css";
import { Breed } from "../../components/materialUI/MaterialUI";

const OrderPage = (props) => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getOrders());
	}, []);

	console.log(user);

	return (
		<Layout>
			<div style={{ maxWidth: "1160px", margin: "5px auto" }}>
				<Breed
					breed={[
						{ name: "Home", href: "/" },
						{ name: "My Account", href: "/account" },
						{ name: "My Orders", href: "/account/orders" },
					]}
					breedIcon={<IoIosArrowForward />}
				/>
				{user.orders.map((order, orderIndex) => {
					return order.items.map((item, itemIndex) => (
						<Card
							style={{ display: "block", margin: "5px 0" }}
							key={`${orderIndex}-${itemIndex}`}
						>
							<Link to={`/order_details/${order._id}`} className="orderItemContainer">
								<div className="orderImgContainer">
									<img
										className="orderImg"
										src={item.productId.productPictures[0].img}
										alt={item.name}
									/>
								</div>
								<div className="orderRow">
									<div className="orderName">{item.productId.name}</div>
									<div className="orderPrice">
										<BiRupee />
										{item.payablePrice}
									</div>
									<div>{order.paymentStatus}</div>
								</div>
							</Link>
						</Card>
					));
				})}
			</div>
		</Layout>
	);
};

export default OrderPage;
