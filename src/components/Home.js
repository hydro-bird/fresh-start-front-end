import React, { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Search from './Search.js'
import Login from './Login.js';
import AboutUs from './AboutUs.js'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }

  }
  handleUserSubmit = (user =>{
    this.setState({user: user});
    console.log('we have a user',user);
  })
  

  render() {
   
      if(this.state.user === ''){
        return (<Login handleUserSubmit={this.handleUserSubmit}></Login>)
      }else{
        return (<Search></Search>)
      }
  }

}

export default Home;