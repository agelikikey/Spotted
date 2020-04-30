import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Signup } from "./views/signup";
import { Login } from "./views/login";
import GoogleLogin from "react-google-login";
import injectContext from "./store/appContext";
import NavbarTwo from "./component/navbar_copy";
// import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { ResultsSoap } from "./views/results-soap";
import { ResultsTp } from "./views/results-toiletpaper";
import { ResultsMasks } from "./views/results-masks";
import { ResultsWipes } from "./views/results-wipes";
import { ResultsEssentials } from "./views/results-essentials";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarTwo />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/demo" component={Demo} />
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route path="/single/:theid" component={Single} />
						<Route path="/results-soap" component={ResultsSoap} />
						<Route path="/results-masks" component={ResultsMasks} />
						<Route path="/results-toiletpaper" component={ResultsTp} />
						<Route path="/results-wipes" component={ResultsWipes} />
						<Route path="/results-essentials" component={ResultsEssentials} />
						<Route render={() => <h1>Not found!</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
