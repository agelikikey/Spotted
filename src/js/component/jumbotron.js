import React from "react";
import Banner from "../../img/banner.png";

import FullLogo from "../../img/fullLogo.png";

export const Jumbotron = props => (
	<div id="jumbotron" className="jumbotron">
		<div className="container">
			<h1 className="display-4">
				<img src={FullLogo} alt="Spotted logo" height="160" />
			</h1>
			<h5>Find what you need all in one spot!</h5>

			<div className="col-auto input-group mb-3 siteSearch">
				<label className="sr-only" htmlFor="inlineFormInputGroup">
					Search
				</label>
				{/* <div className="input-group mb-2"> */}
				<div className="input-group-prepend">
					<div className="input-group-text bg-white">
						<select className="essential-dropdown">
							<option value="default">Select an essential:</option>
							<option value="toilet paper">Toilet Paper</option>
							<option value="antibacterial soap">Antibacterial Soap</option>
							<option value="disinfectant wipes">Disinfectant Wipes</option>
							<option value="masks">Masks</option>
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
		</div>
	</div>
);
