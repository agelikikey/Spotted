import React, { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../../styles/home.scss";
import "../../styles/index.scss";

import rigoImage from "../../img/magnifyingGlass.svg";

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
						<img src="magnifyingGlass.svg" alt="Magnifying Glass with Heart" height="80" width="80" />
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo youre reading this text in a modal!</Modal.Body>
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
