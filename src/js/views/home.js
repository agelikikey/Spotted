import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron } from "../component/jumbotron";
import { Card } from "../component/card";
import { Team } from "../component/team";

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
							pic="https://media-exp1.licdn.com/dms/image/C4D03AQHXXi5dt2se6Q/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=LalXLpJ7fpG4KfI-Wd5w6BxdL1eWWuI5phT2l7emjuo"
							homebase="Miami Florida"
							bio=" Software Developer"
						/>
						<Team
							member="Brenda Matos"
							pic="https://pbs.twimg.com/profile_images/1040306856516886528/bfNA3fD-_400x400.jpg"
							homebase="Miami Florida"
							bio="Tech Unicorn"
						/>
						<Team
							member="Stephanie Moure"
							pic="https://lh3.googleusercontent.com/proxy/XL_C49YZgrdTWOtridKMYj1FNf_UNCvRalMuV6_1JDAXJ8P1R0If8dwTw487bPlasF1JWv1TA0FRAwovWcXHK8KFXs8O3btDlM3tTvJvFpMTsldwEHY"
							homebase="Miami Florida"
							bio="Animal Lover + Software Developer"
						/>
					</div>
				</div>
			</div>
		</div>
		<div className="text-center mt-5 py-3">
			<h4> JOIN THE MOVEMENT </h4>
			<h6> FIND YOUR ESSENTIALS TODAY!</h6>
			<p />
			<a href="#" className="btn btn-success">
				SIGN ME UP
			</a>
		</div>
	</div>
);
