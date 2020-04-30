import React, { useState, useEffect, useContext, Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../../styles/home.scss";
import "../../styles/index.scss";
import magnifyingGlass from "../../img/magnifyingGlass.png";

export function ButtonModal() {
	const [show, setShow] = useState(false);
	const [imagePreview, setImagePreview] = useState(null);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const url = "https://8080-b6966691-a04f-480b-8dfc-c1061693b3a3.ws-us02.gitpod.io/wp-json/sample_api/v1/essentials";
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			whateverKeyNameYouWant: "get value from state",
			productName: "get the value from the state",
			productZipCode: "get value from state"
		})
	})
		.then(resp => resp.json())
		.then(message => console.log(message));

	return (
		<>
			<Button className="buttonModal" onClick={handleShow}>
				Spotted!
			</Button>
			<Modal className="modal" show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>
						<img
							className="modalLogo"
							src={magnifyingGlass}
							alt="Magnifying Glass with Heart"
							height="80"
							width="80"
						/>
						<h4 className="modalTitle">What did you Spot?</h4>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{/* {imagePreview && <img src={imagePreview} />} */}
					<div>
						<input
							type="file"
							onChange={e => setImagePreview(URL.createObjectURL(e.target.files[0]))}
							className="form-control"
							accept="image/*"
							placeholder="Upload image of essential item"
							aria-label="Image"
							aria-describedby="basic-addon1"
						/>
						<div className="container d-flex justify-content-center image-preview">
							{imagePreview && <img src={imagePreview} />}
						</div>
					</div>

					<br />
					<select id="items">
						<option value="default">Choose an essential:</option>
						<option value="toilet paper">Toilet Paper</option>
						<option value="antibacterial soap">Soap</option>
						<option value="disinfectant wipes">Wipe</option>
						<option value="masks">Mask</option>
					</select>
					<br />
					<br />
					{/* <label hmtlFor="basic-url">Enter your zipcode</label> */}
					{/* <span className="input-group-text" id="basic-addon3"> */}
					{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 8C9.79 8 8 9.79 8 12C8 14.21 9.79 16 12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8ZM20.94 11C20.48 6.83 17.17 3.52 13 3.06V1H11V3.06C6.83 3.52 3.52 6.83 3.06 11H1V13H3.06C3.52 17.17 6.83 20.48 11 20.94V23H13V20.94C17.17 20.48 20.48 17.17 20.94 13H23V11H20.94ZM12 19C8.13 19 5 15.87 5 12C5 8.13 8.13 5 12 5C15.87 5 19 8.13 19 12C19 15.87 15.87 19 12 19Z"
                            fill="#FF6288"
                        />
                    </svg>
                    </span> */}
					<input
						type="number"
						className="form-control"
						id="zipField"
						aria-describedby="basic-addon3"
						placeholder="Enter your zipcode"
					/>
					<br />
					<input
						type="number"
						className="form-control"
						id="price"
						aria-describedby="basic-addon3"
						placeholder="Enter the price $00.00"
					/>
					<br />
					<textarea
						className="form-control"
						aria-label="With textarea"
						placeholder="Provide some helpful tips"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button className="modalClose" variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button className="modalSave" variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
// export default buttonModal;
