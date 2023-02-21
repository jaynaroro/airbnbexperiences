import React from "react"
import airbnblogo from "../assets/Images/airbnb-logo.png"

export default function Navbar(){
    return(
        <div className="navbar-component">
            <img src={airbnblogo} alt="airbnbpics" />
        </div>
    )
}