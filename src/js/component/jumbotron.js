import React from "react";
import Banner from "../../img/banner.png";
import { SearchBar } from "../component/searchBar";

import FullLogo from "../../img/fullLogo.png";

export const Jumbotron = props => (
	<div id="jumbotron" className="jumbotron">
		<div className="container">
			<h1 className="display-4">
				<img src={FullLogo} alt="Spotted logo" height="160" />
			</h1>
			<h5>Find what you need all in one spot!</h5>
			<SearchBar {...props} />
		</div>
	</div>
);
