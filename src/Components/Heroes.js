import React from "react"
import heroespic from "../assets/Images/heroes-pic.png"

export default function Heroes(){
    return (
        <div className="heroes-component">
            <img className="hero-photo" src={heroespic} alt="hero-pics" />
            <span className="hero-text">
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-paragraph">
                Join unique interactives activities led by one-of-a-kind hosts-all without leaving home
            </p>
            </span>
        </div>
    )
}