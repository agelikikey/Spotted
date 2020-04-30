import React from "react";

export const SearchBar = () => (
	<div className="col-auto input-group mb-3 siteSearch">
		<label className="sr-only" htmlFor="inlineFormInputGroup">
			Search
		</label>
		{/* <div className="input-group mb-2"> */}
		<div className="input-group-prepend">
			<div className="input-group-text bg-white">
				<select className="essential-dropdown">
					<option value="default">Select an essential:</option>
					<option value="toilet paper">Paper</option>
					<option value="antibacterial soap">Soap</option>
					<option value="disinfectant wipes">Wipe</option>
					<option value="masks">Mask</option>
				</select>
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
			<span className="input-group-text bg-white text-dark">
				<i className="fas fa-search" />
			</span>
		</div>
		{/* </div> */}
	</div>
);
