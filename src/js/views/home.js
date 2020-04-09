import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron } from "../component/jumbotron";

export const Home = () => (
	<div>
		<div className="text-center mt-5">
			<Jumbotron />
			<h1>Hello Ladies! :) </h1>
			<p />
			<a href="#" className="btn btn-success">
				Blah Blah Blah Blah
			</a>
		</div>
		<div className="text-center mt-5">
			<h4> JOIN THE MOVEMENT </h4>
			<h6> FIND YOUR ESSENTIALS TODAY!</h6>
			<p />
			<a href="#" className="btn btn-success">
				SIGN ME UP
			</a>
		</div>
	</div>
);
