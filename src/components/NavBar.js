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
      <Fragment>
        <h3>Fresh Start</h3>
        <Link to="/"> HOME</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/Favorites">Favorites</Link>
      </Fragment>
    )

  }

}

export default NavBar;