import React from "react";
import "./styles/Header.css"
import logo from "../images/airbnb.svg"


function Header(){
    return(
        <header>
            <div className="container">
                <div className="navbar">
                    <img className="logo" src={logo} alt="AirBnb Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;