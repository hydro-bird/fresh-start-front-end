import React, { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import AboutUs from './AboutUs.js';
import Home from './Home.js';
import Favorites from './Favorites.js'
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

  render() {
    return (
      <div className="links">
        <h3>Fresh Start</h3>
        <Link id="linkOne" to="/"> HOME</Link>
        <Link id="linkTwo" to="/about-us">About Us</Link>
        <Link id="linkThree" to="/Favorites">Favorites</Link>
      </div>
    )

  }

}

export default NavBar;