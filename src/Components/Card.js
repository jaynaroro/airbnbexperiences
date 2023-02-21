import React from "react"
import starlogo from "../assets/Images/star-logo.png"

export default function Card(props){
  let badgeText 
  if(props.openSpots === 0)
  {
    badgeText = 'SOLD OUT'
  }else if(props.location === "Online")
  {
    badgeText = 'ONLINE'
  }

    return (
        <div className="card-component">
            {badgeText && <div className="card-badge">{badgeText}</div> }
            <img className="profile-photo" src={props.coverImg} alt="profile-pic" />
            <div className="profile-rating" >
                <img className="star-logo"src={starlogo} alt="star-pic" /> 
                <span>{props.stats.rating}</span> 
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
                </div> 
                <p className="profile-description">
                    {props.title}
                </p>
                <p className="card-price">
                    <span className="bold">From ${props.price}</span> / person
                </p> 
        </div>
    )
}