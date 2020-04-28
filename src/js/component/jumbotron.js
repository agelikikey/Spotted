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

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">
					Search
				</label>
				<div className="input-group mb-2">
					<div className="input-group-prepend">
						<div className="input-group-text bg-info">
							<i className="fas fa-search" />
						</div>
					</div>
					<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" />
					<div className="input-group-append">
						<span className="input-group-text bg-info text-light">SPOT IT!</span>
					</div>
				</div>
			</div>
		</div>
	</div>
);
