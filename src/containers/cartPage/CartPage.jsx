import React from "react";
import Layout from "../../components/layout/Layout";
import Card from "../../components/UI/card/Card";
import { useSelector } from "react-redux";
import "./style.css";
import { MaterialButton } from "../../components/materialUI/MaterialUI";

const CartPage = (props) => {
	// const auth = useSelector((state) => state.auth);
	const cart = useSelector((state) => state.cart);
	const cartItems = cart.cartItems;

	// if (cart) {
	// }

	return (
		<Layout>
			<div className="cartContainer" style={{ alignItems: "flex-start" }}>
				<Card
					headerLeft={`My Cart`}
					headerRight={<div>Deliver to</div>}
					style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
				>
					{/* {JSON.stringify(cartItems)} */}
					{Object.keys(cartItems).map((item, index) => {
						return (
							<li>{`${item} ------ ${JSON.stringify(
								cartItems[item]
							)}`}</li>
						);
					})}
					{/* {Object.keys(cartItems).map((key, index) => (
						<CartItem
							key={index}
							cartItem={cartItems[key]}
							onQuantityInc={onQuantityIncrement}
							onQuantityDec={onQuantityDecrement}
							onRemoveCartItem={onRemoveCartItem}
						/>
					))} */}

					<div
						style={{
							width: "100%",
							display: "flex",
							background: "#ffffff",
							justifyContent: "flex-end",
							boxShadow: "0 0 10px 10px #eee",
							padding: "10px 0",
							boxSizing: "border-box",
						}}
					>
						<div style={{ width: "250px" }}>
							<MaterialButton
								title="PLACE ORDER"
								onClick={() => props.history.push(`/checkout`)}
							/>
						</div>
					</div>
				</Card>
				{/* <PriceDetails
					totalItem={Object.keys(cart.cartItems).reduce(function (
						qty,
						key
					) {
						return qty + cart.cartItems[key].qty;
					},
					0)}
					totalPrice={Object.keys(cart.cartItems).reduce(
						(totalPrice, key) => {
							const { price, qty } = cart.cartItems[key];
							return totalPrice + price * qty;
						},
						0
					)}
				/> */}
			</div>
		</Layout>
	);
};

export default CartPage;
