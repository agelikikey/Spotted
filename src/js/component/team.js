import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Team = props => (
	<div className="card mb-3 mx-2 border border-secondary bg-light text-dark rounded" style={{ width: "18rem" }}>
		<a target="_blank" rel="noopener noreferrer" href={props.linkedin}>
			<img id="card-img" src={props.pic} className="card-img-top" alt="..." />
		</a>
		<div className="card-body">
			<h5 className="card-title">{props.member}</h5>
			<p className="card-text">{props.bio}</p>
		</div>
		<ul className="list-group list-group-flush">
			<li className="list-group-item">
				<i className="fas fa-map-marker-alt">{props.homebase}</i>
			</li>
		</ul>
	</div>
);

Team.propTypes = {
	member: PropTypes.string,
	pic: PropTypes.string,
	bio: PropTypes.string,
	homebase: PropTypes.string,
	linkedin: PropTypes.string
};
