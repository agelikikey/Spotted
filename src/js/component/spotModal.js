import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Modal = props => {
    const { actions } = useContext(Context);
    const [state, setState] = useState();

    return (
        <div className="modal" tabIndex="-1" role="dialog" style={{ display: props.show ? "inline-block" : "none" }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">A<img src="magnifyingGlass.svg" alt="Magnifying Glass with Heart" height="80" width="80" /></h5>
                        {props.onClose ? (
                            <button
                                onClick={() => props.onClose()}
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        ) : (
                                ""
                            )}
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="file" className="form-control" accept="image/*" placeholder="Upload image of essential" aria-label="Image" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <label for="items">Choose an essential:</label>
                            <select id="items">
                                <option value="toilet paper">Toilet Paper</option>
                                <option value="antibacterial soap">Antibacterial Soap</option>
                                <option value="disinfectant wipes">Disinfectant Wipes</option>
                                <option value="masks">Masks</option>
                            </select>
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">@example.com</span>
                            </div>
                        </div>

                        <label for="basic-url">Enter your location</label>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon3"><img src="my_location-24px 2.svg" alt="Compass" height="24" width="24" /></span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Describe the item</span>
                            </div>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-dismiss="modal">
                            Cancel
						</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-dismiss="modal"
                            onClick={() => {
                                actions.deleteContact(props.idContact);
                                //useState((props.show = false));
                            }}>
                            Post
						</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
    history: PropTypes.object,
    onClose: PropTypes.func,
    show: PropTypes.bool,
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
    show: false,
    onClose: null,
};