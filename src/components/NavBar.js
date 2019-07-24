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
  handleClick = (e) => {
    e.preventDefault();
    console.log('click')
  }
  handleClick() {
    this.setState({
        open: !this.state.open
    });
}
  render() {
    return (
      <div className="links">
        
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