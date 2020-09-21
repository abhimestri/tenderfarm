import React, {Component} from 'react';
import './Navbar.css'

class Navbar extends Component{
    render(){
        return(
            <div className="NavbarContainer">
                <p className="Branding">Best Tenders</p>
                    <div className="optionControl">
                        <div className="notificationNum"><p>5</p></div>
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                        <div className="inputBlockELe">
                            <i class="fa fa-search searchIconNav" aria-hidden="true"></i>
                            <input type="text" className="InputField" placeholder="Search..." />
                        </div>
                        <div className="ProfileContainer">
                            <div className="profilePic"></div>
                            <p className="ProfileName">David</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Navbar