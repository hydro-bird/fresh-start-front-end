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
  componentDidMount(){
    if(sessionStorage.userData){
      let userData = sessionStorage.getItem('userData');
      
      this.setState(JSON.parse(userData));
    }
  }

  handleUserSubmit = (user) =>{
    (async () => {
      let response = await superagent.get(`https://fresh-start-back-end.herokuapp.com/user?email=${user}`)
      let newState = this.state;
      newState.userName = response.body.username;
      newState.favorites = response.body.faveCities;
      await this.setState(newState);
      sessionStorage.setItem('userData', JSON.stringify(this.state));

    })();
  }
  handleFavoriteAdd = (city) =>{
    console.log(city);
    if(this.state.favorites.includes(city) === false){
      let newState = this.state;
      newState.favorites.push(city);
      sessionStorage.setItem('userData', JSON.stringify(newState));
      alert(`${city} successfully added to your favorites`)
    }else{
      alert(`${city} is already in your favorites`)
    }
  }
  handleFavoriteRemove = (city) =>{
    console.log(city);
    if(this.state.favorites.includes(city)){
      let newState = this.state;
      let newFav = newState.favorites.filter(el=>{
        return el !== city;
      })
      newState.favorites = newFav;
      sessionStorage.setItem('userData', JSON.stringify(newState));
      alert(`${city} successfully removed from your favorites`)
    }else{
      alert(`${city} is not in your favorites`)
    }
  }
  

  render() {
      if(this.state.userName === ""){

        return (<Login handleUserSubmit={this.handleUserSubmit}></Login>)
      }else{
        return (<Search userData={this.state} handleFavoriteAdd={this.handleFavoriteAdd} handleFavoriteRemove={this.handleFavoriteRemove}></Search>)
      }
  }

}

export default Home;