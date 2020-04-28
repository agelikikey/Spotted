import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { ButtonModal } from "../component/buttonModal";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export const Results = props => {
	// const { store, actions } = useContext(Context);
	return (
		<>
			<div className="jumbotron pb-0 px-5">
				<div className="d-flex justify-content-center">
					<div className="col-7">
						<label className="sr-only" htmlFor="inlineFormInputGroup">
							Search
						</label>
						<div className="input-group mb-2">
							<div className="input-group-prepend">
								<div className="input-group-text bg-info">
									<i className="fas fa-search" />
								</div>
							</div>
							<input
								type="text"
								className="form-control"
								id="inlineFormInputGroup"
								placeholder="Search"
							/>
							<div className="input-group-append">
								<span className="input-group-text bg-info text-light">SPOT IT!</span>
							</div>
						</div>
					</div>
					<div className="col-4">
						<label className="sr-only" htmlFor="inlineFormInputGroup">
							Change zone
						</label>
						<div className="input-group mb-2">
							<div className="input-group-prepend">
								<div className="input-group-text bg-info">
									<i className="fas fa-search-location" />
								</div>
							</div>
							<input
								type="text"
								className="form-control"
								id="inlineFormInputGroup"
								placeholder="Location"
							/>
							<div className="input-group-append">
								<span className="input-group-text bg-info text-light">Change your SPOT zone</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row ">
					<div id="resultsmap" className="col-6 align-self-stretch ">
						<img
							src="https://i1.wp.com/geoawesomeness.com/wp-content/uploads/2017/10/maps-broadcom.png?fit=2286%2C1263&ssl=1"
							alt="..."
							className="img-thumbnail"
						/>
					</div>

					<div id="resultscard" className="card-columns col-6 justify-content-around ">
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>

			<div className="jumbotron py-2 px-5">
				<div className="d-flex justify-content-center">
					<h1>Hot SPOTS in your area</h1>
				</div>
			</div>
			<div id="resultscard" className="card-columns justify-content-center mx-5">
				<div className="container">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<div className="d-flex justify-content-left btn-lg btn-block">
					<Link to="/">
						<button className="btn btn-primary ">Back home</button>
					</Link>
				</div>
			</div>
		</>
	);
};

Results.propTypes = {};

//.card-columns {
//   @include media-breakpoint-only(lg) {
//     column-count: 4;
//   }
//   @include media-breakpoint-only(xl) {
//     column-count: 5;
//   }
// }
