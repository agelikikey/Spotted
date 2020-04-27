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
                    <p>Modal body text goes here.</p>
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