import React, { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Search from './Search.js';
import Login from './Login.js';
import AboutUs from './AboutUs.js';
import superagent from 'superagent';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      favorites: [],
      id: ''

    }

  }
  handleUserSubmit = (user) =>{
    
    
    console.log('we have a user',user);
    superagent.get('http://5d3246fc4901b4001401a82e.mockapi.io/user')
    .then(result => {
      let newState = this.state;
      newState = result.body[0];
      this.setState(newState);
      console.log(result.body);
    });
  }
  

  render() {
   
      if(this.state.userName === ''){
        return (<Login handleUserSubmit={this.handleUserSubmit}></Login>)
      }else{
        return (<Search></Search>)
      }
  }

}

export default Home;