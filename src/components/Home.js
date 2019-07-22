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
      user: '',
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
  handleFavoriteAdd = (city) =>{
    console.log(city);
    let newState = this.state;
    newState.favorites.push(city);
  }
  

  render() {
   
      if(this.state.user === ''){
        return (<Login handleUserSubmit={this.handleUserSubmit}></Login>)
      }else{
        return (<Search userData={this.state} handleFavoriteAdd={this.handleFavoriteAdd}></Search>)
      }
  }

}

export default Home;