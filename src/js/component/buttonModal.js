import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../../styles/home.scss";
import "../../styles/index.scss";

import magnifyingGlass from "../../img/magnifyingGlass.png";

export function ButtonModal() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button className="buttonModal" onClick={handleShow}>
				Launch demo modal
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<img src={magnifyingGlass} alt="Magnifying Glass with Heart" height="80" width="80" />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input
						type="file"
						className="form-control"
						accept="image/*"
						placeholder="Upload image of essential item"
						aria-label="Image"
						aria-describedby="basic-addon1"
					/>

					<label hmtlFor="items">Choose an essential:</label>
					<select id="items">
						<option value="toilet paper">Toilet Paper</option>
						<option value="antibacterial soap">Antibacterial Soap</option>
						<option value="disinfectant wipes">Disinfectant Wipes</option>
						<option value="masks">Masks</option>
					</select>

					<label hmtlFor="basic-url">Enter your location</label>
					<span className="input-group-text" id="basic-addon3">
						<img src="my_location-24px 2.svg" alt="Compass" height="24" width="24" />
					</span>
					<input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />

					<textarea className="form-control" aria-label="With textarea" />
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
// export default buttonModal;
