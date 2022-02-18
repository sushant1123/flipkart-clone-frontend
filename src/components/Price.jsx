import React from "react";
import { BiRupee } from "react-icons/bi";

const Price = (props) => {
	return (
		<span
			style={{
				fontSize: props.fontSize ? props.fontSize : "14px",
				fontWeight: "bold",
				margin: "5px 0",
			}}
		>
			<BiRupee /> {props.value}
		</span>
	);
};

export default Price;
