import React, { useState, useEffect, useContext, Component } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import "../../styles/home.scss";
import "../../styles/index.scss";
import magnifyingGlass from "../../img/magnifyingGlass.png";

export function ButtonModal() {
	const [show, setShow] = useState(false);
	const [imagePreview, setImagePreview] = useState(null);

	const [img, setImg] = useState("");
	const [itemname, setItemname] = useState("");
	const [zip, setZip] = useState("");
	const [price, setPrice] = useState("");
	const [postTitle, setPostTitle] = useState("");
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button className="buttonModal" onClick={handleShow}>
				Spotted!
			</Button>
			<Modal show={show} onHide={handleClose}>
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
							// onChange={e => setImagePreview(URL.createObjectURL(e.target.files[0]))}
							// onChange={e => setImg(e.target.value)}
							onChange={e => {
								setImagePreview(URL.createObjectURL(e.target.files[0]));
								setImg(e.target.value);
							}}
							name="img"
							value={img}
							className="form-control"
							accept="image/*"
							placeholder="Upload image of essential item"
							aria-label="Image"
							aria-describedby="basic-addon1"
						/>
						<div className="container d-flex justify-content-center image-preview">
							{imagePreview && <img src={imagePreview} style={{ width: "300px" }} />}
						</div>
					</div>
					<br />
					<select id="items" name="itemname" onChange={e => setItemname(e.target.value)}>
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
						name="zip"
						value={zip}
						onChange={e => setZip(e.target.value)}
					/>
					<br />
					<input
						type="number"
						className="form-control"
						id="price"
						aria-describedby="basic-addon3"
						placeholder="Enter the price $00.00"
						name="price"
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
					<br />
					<textarea
						className="form-control"
						aria-label="With textarea"
						placeholder="Provide some helpful tips"
						name="post_title"
						value={postTitle}
						onChange={e => setPostTitle(e.target.value)}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button className="modalClose" variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button
						className="modalSave"
						variant="primary"
						onClick={() => {
							const url =
								"https://8080-b653c7b7-7ba6-48c6-ae42-619786f4fd5c.ws-us02.gitpod.io/wp-json/sample_api/v1/createessential";
							fetch(url, {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									img: img,
									itemname: itemname,
									price: price,
									zip: zip,
									post_title: postTitle
								})
							})
								.then(resp => resp.json())
								.then(message => console.log(message));
							handleClose();
						}}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}
// export default buttonModal;
