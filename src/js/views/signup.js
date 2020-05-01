import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Phone } from "../component/phone";
import { ButtonModal } from "../component/buttonModal";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";
import FullLogo from "../../img/fullLogo.png";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.signup.map((item, index) => {
					return <li key={index} className="d-flex p-2" style={{ background: item.background }} />;
				})}
			</ul>
			<br />
			<div className="d-flex justify-content-center">
				<img src={FullLogo} alt="Spotted logo" height="160" />
			</div>
			<div className="d-flex justify-content-center">
				<h6> FIND EVERYTHING YOU NEED ALL IN ONE SPOT </h6>
			</div>
			<div>
				<Phone />
			</div>

			<br />
			<br />
			<br />
		</div>
	);
};

//   <>
// // 			<div className="d-flex justify-content-center"><h1> SPOTTED </h1> </div>
// // <div className="d-flex justify-content-center"> <h3> SIGN UP HERE </h3> </div>
// //                 <button className="btn btn-success" onClick={() => actions.changeColor(index, "hotpink")}>
// // 								I Am A New User
// // 							</button>
// // 			<div className=" d-flex justify-content-center">
// // 				<Link to="/">
// // 					<button className="btn btn-primary ">Back home</button>
// // 				</Link>
// // 			</div>

// //             </>
// //                     );
// //         </div>
// // 	);
// //     };
