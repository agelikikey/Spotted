import React, { useState } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";

export function Signin() {
	const responseGoogle = response => {};
	return (
		<div className="App">
			<h1> Login With Google</h1>
			<GoogleLogin
				clientId="785528636457-nj16e5a3ov0g3blc3a6eeubl6gmmv674.apps.googleusercontent.com"
				buttonText="Login"
				onSuccess={responseGoogle}
				onFailure={responseGoogle}
				cookiePolicy={"single_host_origin"}
			/>
		</div>

		// <div className="wrapper fadeInDown">
		// 	<div id="formContent">
		// 		{/* <!-- Icon --> */}
		// 		<div className="fadeIn first" align="center">
		// 			<img
		// 				src="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_1280.png"
		// 				height="500"
		// 				width="auto"
		// 				crop="fill"
		// 				id="icon"
		// 				alt="User Icon"
		// 			/>
		// 		</div>
		// 		{/* <!-- Login Form --> */}
		// 		<form align="center">
		// 			<input
		// 				type="text"
		// 				id="login"
		// 				className="fadeIn second"
		// 				nameName="login"
		// 				placeholder="phone number login"
		// 			/>
		// 			<input type="text" id="password" className="fadeIn third" nameName="login" placeholder="password" />
		// 			<Link to={"/results"} href="#" className="fadeIn fourth" value="Log In">
		// 				<button className="btn btn-info">Login</button>
		// 			</Link>
		// 		</form>
		// 		{/* <!-- Remind Passowrd --> */}
		// 		<div id="formFooter" align="center">
		// 			<a className="underlineHover" align="center" href="#">
		// 				Forgot Password?
		// 			</a>
		// 		</div>
		// 	</div>
		// </div>
	);
}
