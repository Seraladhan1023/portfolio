import React from "react";
import { FaHamburger } from "react-icons/fa";

function Hamburger() {
    return (
        <div className="text-danger">
            <div className="navbar-logo">
                <h3 className=" navbar-logo"> NS</h3>
            </div>
            <FaHamburger />
        </div>
    );
}

export default Hamburger;
