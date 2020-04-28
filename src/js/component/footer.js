import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
	<div className="mt-auto py-0 text-center text-white bottom coaFooter">
		<footer className="page-footer font-small blue py-8">
			<div className="text-center mt-5 py-3">
				<h4> JOIN THE MOVEMENT </h4>
				<h6> FIND YOUR ESSENTIALS TODAY!</h6>
				<p />
				<Link to={"/signup"} href="#" className="btn btn-light btnFooter">
					SIGN ME UP
				</Link>
			</div>
			<div className="footer-copyright text-center py-1">
				Made with <i className="fa fa-heart text-danger" /> by
				<p> Women Who Code</p>
			</div>
		</footer>
	</div>
);
