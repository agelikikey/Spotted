import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron } from "../component/jumbotron";
import { Card } from "../component/card";
import { Team } from "../component/team";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div className="text-center mt-5">
			<Jumbotron />
		</div>
		<div className="text-center mx-5">
			<h1>Hot Spots</h1>
			<p>Trending Finds in Your Area</p>
		</div>
		{/* <div className="px-5 card-group justify-content-around"> */}
		<div className="container ">
			<div className="row ">
				<div className="col-4 justify-content-around text-center">
					<Card
						title="Toilet Paper"
						img="https://mobileimages.lowes.com/product/converted/054000/054000133428.jpg?size=xl"
						price="10"
						location="Publix on Biscayne Blvd"
						description="Found TP today @ Publix for BOGO."
						date="4 April 2020"
					/>
				</div>
				<div className="col-4 justify-content-around text-center">
					<Card
						title="Hand Sanitizer"
						img="https://images-na.ssl-images-amazon.com/images/I/81gPULDQMZL._AC_SL1500_.jpg"
						price="20"
						location="CVS on 7th"
						description="only allowing 1 per family @ register"
						date="1 April 2020"
					/>
				</div>
				<div className="col-4 justify-content-around text-center">
					<Card
						title="Bread"
						img="https://www.ambitiouskitchen.com/wp-content/uploads/2019/04/Multi-Grain-Seedy-Sandwich-Bread-Edited-5sq.jpg"
						price="5"
						location="Aldi in Kendall"
						description="All kinds of bread just restocked"
						date="7 April 2020"
					/>
				</div>
			</div>
		</div>
		<div className="container ">
			<div className="row ">
				<div className="col-6 justify-content-around  mt-5">
					<h1> WHAT IS SPOTTED </h1>
					<p>
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						<br />
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>

				<div className="col-6 justify-content-around mt-5">
					<h1> THE SPOTTED TEAM </h1>
					<div className="card-group justify-content-around  text-center">
						<Team
							member="Angel Key"
							pic="data:image/jpeg;base64,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"
							homebase="Miami Florida"
							bio=" Software Developer"
							linkedin="https://www.linkedin.com/in/ageliki-key-a9ba7348/"
						/>
						<Team
							member="Brenda Matos"
							pic="https://pbs.twimg.com/profile_images/1040306856516886528/bfNA3fD-_400x400.jpg"
							homebase="Miami Florida"
							bio="Tech Unicorn"
							linkedin="https://www.linkedin.com/in/brendamatos/"
						/>
						<Team
							member="Stephanie Moure"
							pic="https://media-exp1.licdn.com/dms/image/C4E03AQEpxPMz9JsIbg/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=krcI__c1hZqKOB208v6a7e10cy9ihLl0-w0515gc_rs"
							homebase="Miami Florida"
							bio="Animal Lover + Software Developer"
							linkedin="https://www.linkedin.com/in/stephanie-moure-591715109/"
						/>
					</div>
				</div>
			</div>
		</div>
		<div className="text-center mt-5 py-3">
			<h4> JOIN THE MOVEMENT </h4>
			<h6> FIND YOUR ESSENTIALS TODAY!</h6>
			<p />
			<Link to={"/signup"} href="#" className="btn btn-success">
				SIGN ME UP
			</Link>
		</div>
	</div>
);
