import React, { Component } from 'react';
import './Sidedrawer.css'
import { connect } from 'react-redux'
class Sidedrawer extends Component{

    state = {
        sideDrawerStatus : false
    }

    setStatus = () => {
        this.props.setSideDrawerStatus(false)
    }
    render(){
        return (
            <div className={this.props.status ? "SidedrawerContainer" : "SidedrawerContainerHidden"}>
                <p className="closeIcon" onClick={this.setStatus}>X</p>
                <div className="BrandingName">Tenderfarm</div>
                <ul className="sideDrawerList">
                    <li>
                        <div>
                        <i className="fa fa-home sideDrawerIcon" aria-hidden="true"></i>
                        <p>COMPANY</p>
                        </div>
                    </li>
                    <li className="active">
                        <div>
                        <i className="fa fa-search sideDrawerIcon" aria-hidden="true"></i>
                        <p>EXPLORE</p>
                        </div>
                    </li>
                    <li>
                        <div>
                        <p>LATEST TENDERS</p>
                        </div>
                    </li>
                    <li>
                        <div>
                        <p>BEST TENDERS</p>
                        </div>
                    </li>
                    <li>
                        <div>
                        <p>TEAMSEARCH</p>
                        </div>
                    </li>
                    <li>
                        <div>
                        <i className="fa fa-comment sideDrawerIcon" aria-hidden="true"></i>
                        <p>NOTIFICATION</p>
                        <div className="notificationNumbers"><p>4</p></div>
                        </div>
                    </li>
                </ul>
                <div className="AppleCompanySideDrawerBox">
                    <div className="innerBlock">
                        <p className="appleIconCover">
                            <i class="fa fa-apple appleIcon" aria-hidden="true"></i>
                        </p>
                        <div>Apple Inc.<p>ending soon</p></div>
                    </div>
                    <div className="textForInnerBox"><p>hey! dont forget there's still time to get that tender</p></div>
                </div>
                <ul className="sideDrawerList">
                    <li>
                        <div>
                        <i className="fa fa-envelope-o sideDrawerIcon" aria-hidden="true"></i>
                        <p>MESSAGE</p>
                        </div>
                    </li>
                    <li>
                        <div>
                        <i className="fa fa-user sideDrawerIcon" aria-hidden="true"></i>
                        <p>PROFILE</p>
                        </div>
                    </li>
                </ul>
                <div className="lowerSideDrawerIcon">
                    <div><i class="fa fa-cog" aria-hidden="true"></i></div>
                    <div><i class="fa fa-users" aria-hidden="true"></i></div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
      status : state.showSideDrawer
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        setSideDrawerStatus : status => dispatch({type:"SHOW_SIDEDRAWER" , status : status})
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(Sidedrawer);