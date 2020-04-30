import React, { useState, useEffect, useContext } from "react";
// import Sticky from "react-sticky-el";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { ButtonModal } from "../component/buttonModal";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { SearchBar } from "../component/searchBar";
// import { Navbar } from "../component/navbar";

export const ResultsEssentials = props => {
	// const { store, actions } = useContext(Context);
	return (
		<>
			{/* <Navbar /> */}
			<div className="jumbotron pb-0 px-5 resultsSearch">
				<div className="d-flex justify-content-center">
					{/* <Sticky> */}
					<SearchBar id="resultsSearch" />
					{/* </Sticky> */}
				</div>
			</div>
			<>
				<ButtonModal />
			</>

			<div className="container">
				<div className="row ">
					<div id="resultscard" className="card-columns col-12 justify-content-around ">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</>
	);
};

ResultsEssentials.propTypes = {};

//.card-columns {
//   @include media-breakpoint-only(lg) {
//     column-count: 4;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 5;
//   }
// }
