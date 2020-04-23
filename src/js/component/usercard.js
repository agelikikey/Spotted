import React from "react";
import { PropTypes } from "prop-types";

// these are notes for creating a dynamic card component.
export function Usercard(props) {
	return (
		<div className="border m-3" style={{ width: "300px" }}>
			<div className="card-body text-center">
				<h5 className="card-title"> {props.title} </h5>
				<h6 className="card-sub">{props.sub} </h6>
				<h6 className="card-year">{props.year}</h6>
				<button>
					<a href={props.dUrl} className={props.buttonColor}>
						{/* className={"btn btn-" + props.buttonColor}> */}
						Click Me
					</a>
				</button>
			</div>
		</div>
	);
}
Usercard.propTypes = {
	firstname: PropTypes.string,
	picture: PropTypes.string,
	dUrl: PropTypes.string,
	buttonColor: PropTypes.string,
	sub: PropTypes.string,
	year: PropTypes.string
};