import React, { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Search from './Search.js'
import Login from './Login.js';
import NavBar from './NavBar.js';


class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }

  }
  
  

  render() {
    return (
      <Fragment>
      <NavBar></NavBar>
      <div>ABOUT US</div>
      </Fragment>
    )

  }

}

export default AboutUs;