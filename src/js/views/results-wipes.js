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

export const ResultsWipes = props => {
	// const { store, actions } = useContext(Context);
	const [wipes, setWipes] = useState([]);
	useEffect(() => {
		fetch("https://8080-b6966691-a04f-480b-8dfc-c1061693b3a3.ws-us02.gitpod.io/wp-json/sample_api/v1/wipes")
			.then(resp => resp.json())
			.then(data => {
				console.log("wipes", data);
				setWipes(data);
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

			<div className="container">
				asdflk
				{wipes.map((item, index) => {
					<div className="row " key={index}>
						<div id="resultscard" className="card-columns col-12 justify-content-around ">
							{item.post_title}
							{/* <Card
							title={item.post_title}
							img={item.img}
							price={item.price}
							location={item.location}
							description={item.brand}
							date={item.post_date}
						/> */}
						</div>
					</div>;
				})}
			</div>
		</>
	);
};

ResultsWipes.propTypes = {};

//.card-columns {
//   @include media-breakpoint-only(lg) {
//     column-count: 4;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 5;
//   }
// }
