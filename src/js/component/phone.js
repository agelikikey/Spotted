import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Phone() {
	return (
		<form>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="inputEmail4">Phone Number</label>
					<input type="email" className="form-control" id="inputEmail4" placeholder="Phone Number" />
				</div>
				<div className="form-group col-md-6">
					<label htmlFor="inputPassword4">Password</label>
					<input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
				</div>
			</div>
			<div className="form-group">
				<label htmlFor="inputAddress">Address</label>
				<input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
			</div>
			<div className="form-group">
				<label htmlFor="inputAddress2">Address 2</label>
				<input
					type="text"
					className="form-control"
					id="inputAddress2"
					placeholder="Apartment, studio, or floor"
				/>
			</div>
			<div className="form-row">
				<div className="form-group col-md-6">
					<label htmlFor="inputCity">City</label>
					<input type="text" className="form-control" id="inputCity" />
				</div>
				<div className="form-group col-md-4">
					<label htmlFor="inputState">State</label>
					<select id="inputState" className="form-control">
						<option selected>Choose...</option>
						<option>AL</option>
						<option>AK</option>
						<option>AZ</option>
						<option>AR</option>
						<option>CA</option>
						<option>CO</option>
						<option>CT</option>
						<option>DE</option>
						<option>FL</option>
						<option>GA</option>
						<option>HI</option>
						<option>ID</option>
						<option>IL</option>
						<option>IN</option>
						<option>IA</option>
						<option>KS</option>
						<option>KY</option>
						<option>LA</option>
						<option>ME</option>
						<option>MD</option>
						<option>MA</option>
						<option>MI</option>
						<option>MN</option>
						<option>MS</option>
						<option>MO</option>
						<option>MT</option>
						<option>NE</option>
						<option>NV</option>
						<option>NH</option>
						<option>NJ</option>
						<option>NM</option>
						<option>NY</option>
						<option>NC</option>
						<option>ND</option>
						<option>OH</option>
						<option>OK</option>
						<option>OR</option>
						<option>PA</option>
						<option>RI</option>
						<option>SC</option>
						<option>SD</option>
						<option>TN</option>
						<option>TX</option>
						<option>UT</option>
						<option>VT</option>
						<option>VA</option>
						<option>WA</option>
						<option>WI</option>
						<option>WY</option>
						<option>American Samoa - AS</option>
						<option>District of Columbia - DC</option>
						<option>Federated States of Micronesia - FM</option>
						<option>Guam - GU</option>
						<option>Marshall Islands - MH</option>
						<option>Northern Mariana Islands - MP</option>
						<option>Palau - PW</option>
						<option>Puerto Rico - PR</option>
						<option>Virgin Islands - VI</option>
					</select>
				</div>
				<div className="form-group col-md-2">
					<label htmlFor="inputZip">Zip</label>
					<input type="text" className="form-control" id="inputZip" />
				</div>
			</div>
			<div className="form-group">
				<div className="form-check">
					<input className="form-check-input" type="checkbox" id="gridCheck" />
					<label className="form-check-label" htmlFor="gridCheck">
						Sign Me Up For the Spotted Newsletter{" "}
					</label>
				</div>
			</div>
			<button type="submit" className="btn btn-primary">
				Sign Up
			</button>
		</form>
	);
}