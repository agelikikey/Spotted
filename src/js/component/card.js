import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => (
	<div className="card border border-white bg-light text-dark rounded">
		<img id="card-img" src={props.img} className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.description}</p>
		</div>
		<ul className="list-group list-group-flush">
			<li className="list-group-item">${props.price}</li>
			<li className="list-group-item">
				<i className="fas fa-map-marker-alt" />
				{props.location}
			</li>
			<li className="list-group-item">{props.date}</li>
		</ul>
		<div className="card-body">
			<Link to={"/results"} href="#" className="card-link">
				View on map!
			</Link>
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

//style={{ width: "18rem" }}
