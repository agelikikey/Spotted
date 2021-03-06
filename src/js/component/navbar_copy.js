import React, { Component } from "react";
import { Link } from "react-router-dom";

import magnifyingGlass from "../../img/magnifyingGlass.png";

//create your first component
class NavbarTwo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false
		};
	}

	render() {
		let navbar;
		if (this.state.isLoggedIn) {
			navbar = (
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
						<Link to={"/"} className="navbar-brand" href="#">
							<img src={magnifyingGlass} alt="Magnifying Glass with Heart" height="32" />
						</Link>
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
									<Link to="/dash">
										<a className="nav-link" href="#">
											Welcome!
										</a>
									</Link>
								</li>
								{/* <li className="nav-item">
						<Link to="/signup">
							<a className="nav-link" href="#">
								Signup
							</a>
						</Link>
					</li> */}
							</ul>
						</div>
					</nav>
				</div>
			);
		} else {
			navbar = (
				<div>
					<nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
						<Link to={"/"} className="navbar-brand" href="#">
							<img src={magnifyingGlass} alt="Magnifying Glass with Heart" height="32" />
						</Link>
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
									<Link to="/login">
										<a className="nav-link" href="#">
											Login
										</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/signup">
										<a className="nav-link" href="#">
											Signup
										</a>
									</Link>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			);
		}
		return <div>{navbar}</div>;
	}
}

export default NavbarTwo;
