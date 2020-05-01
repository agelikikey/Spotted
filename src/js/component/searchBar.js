import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function SearchBar() {
	const [essential, setEssential] = useState("");

	return (
		<div className="justify-content-around text-center input-group mb-3 siteSearch">
			<label className="sr-only" htmlFor="inlineFormInputGroup">
				Search
			</label>
			{/* <div className="input-group mb-2"> */}
			<div className="dropdown text-center">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					<i className="fas fa-search" />
					Choose an Essential:{" "}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						<Link to="/results-toiletpaper">Toilet Paper</Link>
					</a>
					<a className="dropdown-item" href="#">
						<Link to="/results-masks">Masks</Link>
					</a>
					<a className="dropdown-item" href="#">
						<Link to="/results-wipes">Wipes</Link>
					</a>
					<a className="dropdown-item" href="#">
						<Link to="/results-soap">Soap</Link>
					</a>
					<a className="dropdown-item" href="#">
						<Link to="/results-essentials">All Essentials</Link>
					</a>
				</div>
			</div>
			{/* <span className="input-group-text bg-white text-dark"> */}
			{/* <input
				type="text"
				className="form-control location-search"
				id="inlineFormInputGroup"
				placeholder="Enter your zip code"
			/> */}
			{/* </span> */}
			{/* <div className="input-group-append">
				<button className="btn btn-outline-dark bg-white text-dark" type="button">
					<Link to={"/results-wipes"}>
						<i className="fas fa-search" />
					</Link>
				</button>
			</div> */}
			{/* </div> */}
		</div>
	);
}

// SearchBar.propTypes = {
// 	match: PropTypes.object
// };
