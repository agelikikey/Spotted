import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron } from "../component/jumbotron";

export const Home = () => (
	<div className="text-center mt-5">
		<Jumbotron />
		<h1>Hello Ladies! :) </h1>
		<p />
		<a href="#" className="btn btn-success">
			Blah Blah Blah Blah
		</a>
	</div>
);
