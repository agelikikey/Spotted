import React, { useState, useEffect, useContext, Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export function SearchBar(props) {
    const [essential, setEssential] = useState("");
    

	return (
		<div className="justify-content-around text-center input-group mb-3 siteSearch">
			<label className="sr-only" htmlFor="inlineFormInputGroup">
				Search
			</label>
			{/* <div className="input-group mb-2"> */}
			<div className="input-group-prepend">
				<div className="input-group-text bg-white">
					<select
						className="essential-dropdown"
						id="items"
						name="itemname"
						onChange={e => props.history.push("/" + e.target.value)}>
						<option value="">Search an essential</option>
						<option value="results-toiletpaper">Toilet Paper</option>
						<option value="results-soap">Antibacterial Soap</option>
						<option value="results-wipe">Disinfectant Wipes</option>
						<option value="results-masks">Facial Masks</option>
						<option value="results-essentials">All Essentials</option>
					</select>
				</div>
				{/* <div className="input-group-append">
					<button className="btn btn bg-white text-dark" type="button">
						<i className="fas fa-search" />
					</button>
				</div> */}
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
						
					</Link>
				</button>
			</div> */}
			{/* </div> */}
		</div>
	);
}

SearchBar.propTypes = {
	history: PropTypes.object
};
