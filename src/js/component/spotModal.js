import React, { useSate, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function spotModal() {
    return (
      <div>
        <div className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title"><img src="magnifyingGlass.svg" alt="Magnifying Glass with Heart" height="80" width="80"/></h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>

                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">@</span>
                            </div>
                            <input type="file" className="form-control" accept="image/*" placeholder="Upload image of essential" aria-label="Image" aria-describedby="basic-addon1"/>
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
                                <span className="input-group-text" id="basic-addon3"><img src="my_location-24px 2.svg" alt="Compass" height="24" width="24"/></span>
                            </div>
                            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                            </div>

                            <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Describe the item</span>
                            </div>
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                            </div>
                    </div>

                    <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Post</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}