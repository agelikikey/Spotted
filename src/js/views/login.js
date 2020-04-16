import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Signin } from "../component/signin";
import { Context } from "../store/appContext";

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
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
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
				<Signin />
			</div>
			<br />
			<br />
			<br />
			<br />
			<div className="d-flex justify-content-center">
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		</div>
	);
};
