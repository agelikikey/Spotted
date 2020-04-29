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
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul>
				{store.signup.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-center"
							style={{ background: item.background }}>
							{// Conditional render example
							// Check to see if the bac kground is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
						</li>
					);
				})}
			</ul>
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
