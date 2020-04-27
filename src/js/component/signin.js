import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Signin() {
	return (
		<div className="wrapper fadeInDown">
			<div id="formContent">
				{/* <!-- Icon --> */}
				<div className="fadeIn first" align="center">
					<img
						src="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_1280.png"
						height="500"
						width="auto"
						crop="fill"
						id="icon"
						alt="User Icon"
					/>
				</div>
				{/* <!-- Login Form --> */}
				<form align="center">
					<input
						type="text"
						id="login"
						className="fadeIn second"
						nameName="login"
						placeholder="phone number login"
					/>
					<input type="text" id="password" className="fadeIn third" nameName="login" placeholder="password" />
					<Link to={"/results"} href="#" className="fadeIn fourth" value="Log In">
						<button className="btn btn-info">Login</button>
					</Link>
				</form>
				{/* <!-- Remind Passowrd --> */}
				<div id="formFooter" align="center">
					<a className="underlineHover" align="center" href="#">
						Forgot Password?
					</a>
				</div>
			</div>
		</div>
	);
}
