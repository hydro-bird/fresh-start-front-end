import React, { Component } from 'react';

import {
  
  Link
  
} from 'react-router-dom';

import "../App.css";


class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  logOut = (e) => {
    console.log('click')
    sessionStorage.clear();
    window.location = '/'
  }
  
  render() {
    return (
      <div className="links">
        <Link onClick={this.logOut} id="linkOne" to="/"> Log Out</Link>
        <Link id="linkOne" to="/"> HOME</Link>
        <Link id="linkTwo" to="/about-us">About Us</Link>
        <Link id="linkThree" to={{
          pathname: '/Favorites',
          state: {
            userData: this.props.userData
          }
        }}>Favorites</Link>
      </div>

    )

  }

}

export default NavBar;