import React, { useState } from "react";
import { generatePublicURL } from "../../../helpers/urlConfig";
import "./style.css";

const CartItem = (props) => {
	const [qty, setQty] = useState(props.cartItem.qty);
	const { _id, name, img, price } = props.cartItem;

	const onQuantityIncrement = () => {
		setQty(qty + 1);
		props.onQuantityInc(_id, qty + 1);
	};

	const onQuantityDecrement = () => {
		if (qty <= 1) return;
		setQty(qty - 1);
		props.onQuantityDec(_id, qty - 1);
	};

	return (
		<div className="cartItemContainer">
			<div className="flexRow">
				<div className="cartProImgContainer">
					{/* <img src={img} alt={name} /> */}
					<img
						src={img.includes("http://localhost:2000/public/") ? img : generatePublicURL(img)}
						alt={name}
					/>
				</div>
				<div className="cartItemDetails">
					<div>
						<p>{name}</p>
						<p>Rs. {price}</p>
					</div>
					<div>Delivery in 3 - 5 days</div>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					margin: "5px 0",
				}}
			>
				{/* quantity control */}
				<div className="quantityControl">
					<button onClick={onQuantityDecrement}>-</button>
					<input value={qty} readOnly />
					<button onClick={onQuantityIncrement}>+</button>
				</div>

				{/* action buttons on cart item */}
				<button className="cartActionBtn">save for later</button>
				<button className="cartActionBtn" onClick={() => props.removeCartItem(_id)}>
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItem;
