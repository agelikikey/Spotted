import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Signin } from "../component/signin";
import { Context } from "../store/appContext";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../../styles/login.scss";
// import Tpmask from "../../img/tpmask.png";

import "../../styles/demo.scss";

export const Login = () => {
	return (
		<div className="loginContainer">
			<br />
			<div>
				<Signin className="signInDiv" />
			</div>
			<br />
			<br />
			<div className="justify-content-left">
				<Link to="/signup">
					<button className="btn btn-primary navSignUp">Not a Spotter? Sign up today!</button>
				</Link>
			</div>
		</div>
	);
};
