import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Signin() {
	return (
		<div className="wrapper fadeInDown">
			<div id="formContent">
				{/* <!-- Icon --> */}
				<div className="fadeIn first">
					<img
						src="https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_1280.png"
						id="icon"
						alt="User Icon"
					/>
				</div>
				{/* <!-- Login Form --> */}
				<form>
					<input type="text" id="login" className="fadeIn second" nameName="login" placeholder="login" />
					<input type="text" id="password" className="fadeIn third" nameName="login" placeholder="password" />
					<input type="submit" className="fadeIn fourth" value="Log In" />
				</form>
				{/* <!-- Remind Passowrd --> */}
				<div id="formFooter">
					<a className="underlineHover" href="#">
						Forgot Password?
					</a>
				</div>
			</div>
		</div>
	);
}
