import React from 'react'
import './cards.css'

const card = (props) => {

    return (
        <div className="cardContainer">
            <p className="companyName">{props.CompanyName}</p>
            <img src={props.img} alt="" className="companyLogo"/>
            <div className="timingContainer">
                <p className={props.active ? "timeRemaining" : "timeRemainingNotActive"}>{props.time}</p>
                <p className="companyTask">{props.task}</p>
            </div>
            <div className="detailsOfTask">
                <p className="numberOfTeamMembers">{props.teamMembers}<p>Teams</p></p>
                <p className="Budget">{props.budget}<p>Budget</p></p>
                <p className="successRate">{props.success}<p>Success</p></p>
            </div>
        </div>
    )
}

export default card