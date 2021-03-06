import React from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import { Link } from "react-router-dom";

import magnifyingGlass from "../../img/magnifyingGlass.png";

export const Card = props => (
	//     const [state, setState] = useState({
	// //initialize state here
	//     });

	<div className="card border border-dark bg-light text-dark rounded">
		<Link to={"/results-essentials"} href="#" className="card-link">
			<ReactImageFallback
				id="card-img"
				src={props.img}
				fallbackImage={magnifyingGlass}
				alt="cool image should be here"
				className="card-img-top"
				height="50px"
			/>

			{/* <img id="card-img" src={props.img} className="card-img-top" alt="..." height="40" /> */}
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.description}</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">${props.price}</li>
				<li className="list-group-item">
					<img src={magnifyingGlass} alt="Magnifying Glass with Heart" height="20" />
					{props.location}
				</li>
				<li className="list-group-item">{props.date}</li>
			</ul>
		</Link>
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
