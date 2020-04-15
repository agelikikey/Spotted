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
		</>
	);
	{
		/* <!--Carousel Wrapper--> */
	}
	<div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
		{/* <!--Controls--> */}
		<div className="controls-top">
			<a className="btn-floating" href="#multi-item-example" data-slide="prev">
				<i className="fas fa-chevron-left" />
			</a>
			<a className="btn-floating" href="#multi-item-example" data-slide="next">
				<i className="fas fa-chevron-right" />
			</a>
		</div>
		{/* <!--/.Controls-->

  <!--Indicators--> */}
		<ol className="carousel-indicators">
			<li data-target="#multi-item-example" data-slide-to="0" className="active" />
			<li data-target="#multi-item-example" data-slide-to="1" />
			<li data-target="#multi-item-example" data-slide-to="2" />
		</ol>
		{/* <!--/.Indicators-->

  <!--Slides--> */}
		<div className="carousel-inner" role="listbox">
			{/* <!--First slide--> */}
			<div className="carousel-item active">
				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/.First slide-->

    <!--Second slide--> */}
			<div className="carousel-item">
				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/.Second slide-->

    <!--Third slide--> */}
			<div className="carousel-item">
				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>

				<div className="col-md-4">
					<div className="card mb-2">
						<img
							className="card-img-top"
							src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
							alt="Card image cap"
						/>
						<div className="card-body">
							<h4 className="card-title">Card title</h4>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the cards
								content.
							</p>
							<a className="btn btn-primary">Button</a>
						</div>
					</div>
				</div>
			</div>
			{/* <!--/.Third slide--> */}
		</div>
		{/* <!--/.Slides--> */}
	</div>;
	{
		/* .Carousel Wrapper */
	}
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
