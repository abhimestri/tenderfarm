import React, { Component } from "react";
import Card from '../../components/cards'
import './Main.css'
import Logo1 from '../../assets/AppleLogo.png'
import Logo2 from '../../assets/nike-logo.png'
import Logo3 from '../../assets/SamsungLogo.png'
import Logo4 from '../../assets/Evernote.png'
import Logo5 from '../../assets/Twitter.png'
import Logo6 from '../../assets/SoundCloud.jpeg'

class Mainpage extends Component{

    state = {
        Data : [
            {
                CompanyName : "Apple Inc",
                img : Logo1,
                time : "02d:15h:54m",
                task : "ios 10 lead team design",
                teamMembers : "89",
                budget : "88.5m",
                success : "15.5%",
                active: true
            },
            {
                CompanyName : "Nike Inc.",
                img : Logo2,
                time : "10d:21h:33m",
                task : "Fall winter 2016 commercial",
                teamMembers : "254",
                budget : "14.5m",
                success : "5.9%",
                active: true
            },
            {
                CompanyName : "Samsung Electronics Co. Ltd.",
                img : Logo3,
                time : "23d:05h:17m",
                task : "Samsung Center App Design",
                teamMembers : "642",
                budget : "10.2m",
                success : "28.5%",
                active: true
            },
            {
                CompanyName : "Evernote Corp.",
                img : Logo4,
                time : "02m:20d:15h",
                task : "Full product redesign",
                teamMembers : "856",
                budget : "8.7m",
                success : "67.4%",
                active: false
            },
            {
                CompanyName : "Twitter Inc",
                img : Logo5,
                time : "03m:14d:06h",
                task : "Mobile Clients Design",
                teamMembers : "864",
                budget : "5m",
                success : "10.3%",
                active: false
            },
            {
                CompanyName : "SoundCloud LLC",
                img : Logo6,
                time : "03m:10d:20h",
                task : "Innovative Product Monetization",
                teamMembers : "230",
                budget : "4.9m",
                success : "39.2%",
                active: false
            }
        ]
    }

    render(){
        let res = Object.entries(this.state.Data).map(el => {
            return (
                <Card 
                    CompanyName = {el[1].CompanyName}
                    active = {el[1].active}
                    img = {el[1].img}
                    time = {el[1].time}
                    task = {el[1].task}
                    teamMembers = {el[1].teamMembers}
                    budget = {el[1].budget}
                    success = {el[1].success}
                />
            )
        })
        return (
            <div className="mainPageContainer">
                {res}
            </div>
        )
    }
}

export default Mainpage