import React from "react";
import PropTypes from "prop-types";

export const Card = props => (
	<div className="card mb-3 mx-2 border border-secondary bg-light text-dark rounded" style={{ width: "18rem" }}>
		<img id="card-img" src={props.img} className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.description}</p>
		</div>
		<ul className="list-group list-group-flush">
			<li className="list-group-item">
				<i className="fas fa-dollar-sign">{props.price}</i>
			</li>
			<li className="list-group-item">
				<i className="fas fa-map-marker-alt">{props.location}</i>
			</li>
			<li className="list-group-item">{props.date}</li>
		</ul>
		<div className="card-body">
			<a href="#" className="card-link">
				View on map!
			</a>
		</div>
	</div>
);

Card.propTypes = {
	title: PropTypes.string,
	img: PropTypes.string,
	description: PropTypes.string,
	location: PropTypes.string,
	date: PropTypes.string,
	price: PropTypes.string
};
