import React, { Component } from 'react';
import './App.css';
import Sidedrawer from './container/SideDrawer/Sidedrawer'
import Header from './container/Header/Navbar'
import Mainpage from './container/MainSection/Main'
import { connect } from 'react-redux'

class App extends Component {

  setStatus = () =>{
    this.props.setSideDrawerStatus(true)
  }
  render(){
    return (
      <div className="App">
        <i class="fa fa-bars" aria-hidden="true" onClick={this.setStatus}></i>
        <Sidedrawer/>
        <Header/>
        <Mainpage/>
      </div>
    );
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

export default connect(mapStateToProps ,mapDispatchToProps)(App);
