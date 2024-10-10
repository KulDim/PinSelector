// import React, { useState } from "react";
import "./SearchMicrocontroller.css";

function SearchMicrocontroller() {
    return (
        <div className="form">
            <samp className="form-item">
                conter <input></input>
            </samp>
            <div className="form-item">
                <span>
                    pin <input></input>
                </span>
                <span>
                    value <input></input>
                </span>
            </div>
            <div className="form-item">
                <button>add</button>
                <button>dell</button>
            </div>
            <button>SearchMicrocontroller</button>
        </div>
    );
}

export default SearchMicrocontroller;
