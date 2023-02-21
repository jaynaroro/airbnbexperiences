import React from "react"
import Navbar from "./Components/Navbar.js"
import Heroes from "./Components/Heroes.js"
import Card from "./Components/Card.js"
import Data from "./data.js"
import "./App.css"

export default function App(){
    const cardElements = Data.map(card => {
        return <Card 
        key = {card.id}
        {...card}
        //passing the object as is to a property card = {card}

        />
    }) 

    return (
        <div className="app-content">
            <Navbar />
            <Heroes />
            <section className="card-list">
            {cardElements}
            </section>
        </div>
    )
}