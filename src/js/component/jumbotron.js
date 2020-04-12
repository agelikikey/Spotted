import React from "react";

export const Jumbotron = props => (
	<div id="jumbotron" className="jumbotron">
		<div className="container">
			<h5 className="display-4">Spotted</h5>

			<div className="col-auto">
				<label className="sr-only" htmlFor="inlineFormInputGroup">
					Search
				</label>
				<div className="input-group mb-2">
					<div className="input-group-prepend">
						<div className="input-group-text">
							<i className="fas fa-search" />
						</div>
					</div>
					<input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search" />
				</div>
			</div>
		</div>
	</div>
);
