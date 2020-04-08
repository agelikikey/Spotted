import React from "react";

//create your first component
export function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<a className="navbar-brand" href="#">
				Spotted
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" href="#">
							Login
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Signup
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
