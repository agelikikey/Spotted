import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function SearchBar() {
	const [essential, setEssential] = useState("");

	return (
		<div className="col-auto input-group mb-3 siteSearch">
			<label className="sr-only" htmlFor="inlineFormInputGroup">
				Search
			</label>
			{/* <div className="input-group mb-2"> */}
			<div className="dropdown">
				<button
					className="btn btn-secondary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Choose an Essential:{" "}
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Toilet Paper
					</a>
					<a className="dropdown-item" href="#">
						Masks
					</a>
					<a className="dropdown-item" href="#">
						Wipes
					</a>
					<a className="dropdown-item" href="#">
						Soap
					</a>
					<a className="dropdown-item" href="#">
						All Essentials
					</a>
				</div>
			</div>
			{/* <span className="input-group-text bg-white text-dark"> */}
			<input
				type="text"
				className="form-control location-search"
				id="inlineFormInputGroup"
				placeholder="Enter your zip code"
			/>
			{/* </span> */}
			<div className="input-group-append">
				<button className="btn btn-outline-dark bg-white text-dark" type="button">
					<Link to={"/results-wipes"}>
						<i className="fas fa-search" />
					</Link>
				</button>
			</div>
			{/* </div> */}
		</div>
	);
}

// SearchBar.propTypes = {
// 	match: PropTypes.object
// };
