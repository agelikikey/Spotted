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
	const [essentials, setEssentials] = useState([]);
	useEffect(() => {
		fetch("https://8080-b653c7b7-7ba6-48c6-ae42-619786f4fd5c.ws-us02.gitpod.io/wp-json/sample_api/v1/essentials")
			.then(resp => resp.json())
			.then(data => {
				console.log("essentials", data);
				setEssentials(data);
			});
	}, []);

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

			<div className="container ">
				<div className="row ">
					{essentials.map((item, index) => {
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

ResultsEssentials.propTypes = {};

//.card-columns {
//   @include media-breakpoint-only(lg) {
//     column-count: 4;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 5;
//   }
// }
