import React, { useState, useEffect } from "react";
import "./header.css";
import flipkartLogo from "../../images/logo/flipkart.png";
import goldenStar from "../../images/logo/golden-star.png";
import { IoIosArrowDown, IoIosCart } from "react-icons/io";
import { login, signout } from "../../redux/allAsyncActions/allAsyncActions";

import {
	Modal,
	MaterialInput,
	MaterialButton,
	DropdownMenu,
} from "../materialUI/MaterialUI";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = (props) => {
	const [loginModal, setLoginModal] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		if (auth.authenticate) {
			setLoginModal(false);
		}
	}, [auth.authenticate]);

	const logout = () => {
		dispatch(signout());
	};

	const renderLoggedInUserMenu = () => {
		return (
			<DropdownMenu
				menu={
					<a className="userFirstName">
						{auth.user.firstName} &nbsp; <IoIosArrowDown />
					</a>
				}
				menus={[
					{ label: "My Profile", href: "", icon: null },
					{
						label: "SuperCoin Zone",
						href: "",
						icon: null,
					},
					{
						label: "Flipkart Plus Zone",
						href: "",
						icon: null,
					},
					{ label: "Orders", href: "", icon: null },
					{ label: "Wishlist", href: "", icon: null },
					{ label: "My Chats", href: "", icon: null },
					{ label: "Coupons", href: "", icon: null },
					{ label: "Gift Cards", href: "", icon: null },
					{ label: "Notifications", href: "", icon: null },
					{ label: "Logout", href: "", icon: null, onClick: logout },
				]}
			/>
		);
	};
	const renderNonLoggedInUserMenu = () => {
		return (
			<DropdownMenu
				menu={
					<a
						href="#"
						className="loginButton"
						onClick={() => setLoginModal(true)}
					>
						Login
					</a>
				}
				menus={[
					{ label: "My Profile", href: "", icon: null },
					{
						label: "Flipkart Plus Zone",
						href: "",
						icon: null,
					},
					{ label: "Orders", href: "", icon: null },
					{ label: "Wishlist", href: "", icon: null },
					{ label: "Rewards", href: "", icon: null },
					{ label: "Gift Cards", href: "", icon: null },
				]}
				firstMenu={
					<div className="firstmenu">
						<span>New Customer?</span>
						<a href="/" style={{ color: "#2874f0" }}>
							Sign Up
						</a>
					</div>
				}
			/>
		);
	};

	const handleUserLoginRequest = (e) => {
		const user = { email, password };
		// console.log(user);
		dispatch(login(user));
	};

	return (
		<div className="header">
			<Modal visible={loginModal} onClose={() => setLoginModal(false)}>
				<div className="authContainer">
					<div className="row">
						<div className="leftspace">
							<h2>Login</h2>
							<p>
								Get access to your Orders, Wishlist and
								Recommendations
							</p>
						</div>
						<div className="rightspace">
							<div className="loginInputContainer">
								<MaterialInput
									type="text"
									label="Enter Email/Enter Mobile Number"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>

								<MaterialInput
									type="password"
									label="Enter Password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									// rightElement={<a href="#">Forgot?</a>}
								/>

								<p style={{ textAlign: "center" }}>
									By continuing, you agree to Flipkart's Terms
									of Use and Privacy Policy.
								</p>
								<MaterialButton
									title="Login"
									bgColor="#fb641b"
									textColor="#ffffff"
									style={{ margin: "40px 0 20px 0" }}
									onClick={handleUserLoginRequest}
								/>

								<p style={{ textAlign: "center" }}>OR</p>

								<MaterialButton
									title="Request OTP"
									bgColor="#fff"
									textColor="#2874f0"
									style={{ margin: "20px 0" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</Modal>
			<div className="subHeader">
				{/* logo */}
				<div className="logo">
					<a href="">
						<img src={flipkartLogo} className="logoimage" alt="" />
					</a>
					<a style={{ marginTop: "-10px" }}>
						<span className="exploreText">Explore</span>
						<span className="plusText">Plus</span>
						<img src={goldenStar} className="goldenStar" alt="" />
					</a>
				</div>
				{/* logo ends here */}

				{/* search component */}
				<div
					style={{
						padding: "0 10px",
					}}
				>
					<div className="searchInputContainer">
						<input
							className="searchInput"
							placeholder={"search for products, brands and more"}
						/>
						<div className="searchIconContainer">
							{/* <IoIosSearch
								style={{
									color: "#2874f0",
								}}
							/> */}
							<svg
								width="20"
								height="20"
								viewBox="0 0 17 18"
								className=""
								xmlns="http://www.w3.org/2000/svg"
							>
								<g fill="#2874F1" fillRule="evenodd">
									<path
										className="_34RNph"
										d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
									></path>
									<path
										className="_34RNph"
										d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
									></path>
								</g>
							</svg>
						</div>
					</div>
				</div>
				{/* search component ends here*/}

				{/* right side menu */}
				<div className="rightMenu">
					{auth.authenticate
						? renderLoggedInUserMenu()
						: renderNonLoggedInUserMenu()}

					<DropdownMenu
						menu={
							<a className="more" href="/">
								<span>More</span> &nbsp;
								<IoIosArrowDown />
							</a>
						}
						menus={[
							{
								label: "Notification Preference",
								href: "",
								icon: null,
							},
							{ label: "Sell on flipkart", href: "", icon: null },
							{
								label: "24x7 Customer Care",
								href: "",
								icon: null,
							},
							{ label: "Advertise", href: "", icon: null },
							{ label: "Download App", href: "", icon: null },
						]}
					/>
					<div>
						<a className="cart" href="/cart">
							<IoIosCart />
							<span style={{ margin: "0 10px" }}>Cart</span>
						</a>
					</div>
				</div>

				{/* right side menu ends here */}
			</div>
		</div>
	);
};

export default Header;
