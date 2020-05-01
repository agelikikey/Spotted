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

export const ResultsSoap = props => {
	// const { store, actions } = useContext(Context);
	const [soap, setSoap] = useState([]);
	useEffect(() => {
		fetch("https://8080-a97bff73-2556-4de8-ac45-640ee619643b.ws-us02.gitpod.io/wp-json/sample_api/v1/soaps")
			.then(resp => resp.json())
			.then(data => {
				console.log("soaps", data);
				setSoap(data);
			});
	}, []);

	return (
		<>
			{/* <Navbar /> */}
			<div className="jumbotron pb-0 px-5 resultsSearch">
				<div className="d-flex justify-content-center">
					{/* <Sticky> */}
					<SearchBar id="resultsSearch" {...props} />
					{/* </Sticky> */}
				</div>
			</div>
			<>
				<ButtonModal />
			</>

			<div className="container">
				<div className="row ">
					{soap.map((item, index) => {
						return (
							<div id="resultscard" className="col-4 justify-content-around text-center my-5" key={index}>
								<Card
									title={item.post_title}
									img={item.img}
									price={item.price}
									location={item.zip}
									description={item.brand}
									date={item.post_date}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

ResultsSoap.propTypes = {};

//.card-columns {
//   @include media-breakpoint-only(lg) {
//     column-count: 4;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 5;
//   }
// }
