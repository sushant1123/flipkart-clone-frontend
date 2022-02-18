import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import Card from "../../components/UI/card/Card";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./cartItemPage/CartItem";
// import PriceDetails from "./priceDetailsPage/PriceDetails";
import { addToCart, getCartItems, removeCartItem } from "../../redux/allAsyncActions/allAsyncActions";

import "./style.css";
import { MaterialButton } from "../../components/materialUI/MaterialUI";
import { useNavigate } from "react-router-dom";
import PriceDetails from "../../components/priceDetails/PriceDetails";

const CartPage = (props) => {
	const cart = useSelector((state) => state.cart);
	const auth = useSelector((state) => state.auth);
	const [cartItems, setCartItems] = useState(cart.cartItems);
	const dispatch = useDispatch();

	const navigate = useNavigate();

	useEffect(() => {
		setCartItems(cart.cartItems);
	}, [cart.cartItems]);

	useEffect(() => {
		if (auth.authenticate) {
			dispatch(getCartItems());
		}
	}, [auth.authenticate]);

	const onQuantityIncrement = (_id, qty) => {
		const { name, price, img } = cartItems[_id];
		const productObj = { _id, name, price, img };
		dispatch(addToCart(productObj, 1));
	};
	const onQuantityDecrement = (_id, qty) => {
		const { name, price, img } = cartItems[_id];
		const productObj = { _id, name, price, img };
		dispatch(addToCart(productObj, -1));
	};

	const onRemoveCartItem = (_id) => {
		const payload = {
			productId: _id,
		};

		dispatch(removeCartItem(payload));
	};

	if (props.onlyCartItems) {
		return (
			<>
				{Object.keys(cartItems).map((key, index) => (
					<CartItem
						key={index}
						cartItem={cartItems[key]}
						onQuantityInc={onQuantityIncrement}
						onQuantityDec={onQuantityDecrement}
						removeCartItem={onRemoveCartItem}
					/>
				))}
			</>
		);
	}

	return (
		<Layout>
			<div className="cartContainer" style={{ alignItems: "flex-start" }}>
				<Card
					headerLeft={`My Cart`}
					headerRight={<div>Deliver to</div>}
					style={{ width: "calc(100% - 400px)", overflow: "hidden" }}
				>
					{Object.keys(cartItems).map((key, index) => (
						<CartItem
							key={index}
							cartItem={cartItems[key]}
							onQuantityInc={onQuantityIncrement}
							onQuantityDec={onQuantityDecrement}
							removeCartItem={onRemoveCartItem}
						/>
					))}

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
							<MaterialButton title="PLACE ORDER" onClick={() => navigate(`/checkout`)} />
						</div>
					</div>
				</Card>

				{/* <Card headerLeft="Price" style={{ width: "380px" }}></Card> */}

				<PriceDetails
					totalItem={Object.keys(cart.cartItems).reduce(function (qty, key) {
						return qty + cart.cartItems[key].qty;
					}, 0)}
					totalPrice={Object.keys(cart.cartItems).reduce((totalPrice, key) => {
						const { price, qty } = cart.cartItems[key];
						return totalPrice + price * qty;
					}, 0)}
				/>
			</div>
		</Layout>
	);
};

export default CartPage;
