import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

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
							Change your SPOT zone
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

			<div className="col-4 d-flex justify-content-center pb-5">
				<div id="map">
					<img
						src="https://previews.123rf.com/images/ket4up/ket4up1707/ket4up170700042/81563570-gps-navigation-background-road-map-vector-illustration.jpg"
						alt="..."
					/>
				</div>

				<div id="searchResultCards" className="col-8">
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

Results.propTypes = {};
