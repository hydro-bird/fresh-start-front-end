import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';

import Search from './Search.js';
import Login from './Login.js';

import superagent from 'superagent';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      favorites: [],
      user_id: ''

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
      newState.user_id = response.body.user_id;
      await this.setState(newState);
      sessionStorage.setItem('userData', JSON.stringify(this.state));

    })();
  }
  handleFavoriteAdd = (city,geo) =>{
    console.log(city);
    if(this.state.favorites.includes(city) === false){
      let newState = this.state;
      newState.favorites.push({city_name:city});
      sessionStorage.setItem('userData', JSON.stringify(newState));
      this.setState(newState);
      superagent.put(`https://fresh-start-back-end.herokuapp.com/addfavorites/?user_id=${this.state.user_id}&geoname_id=${geo}&city_name=${city}`).then(console.log(`sent ${city} and ${geo} and ${this.state.user_id}`))
    }
  }
  handleFavoriteRemove = (city) =>{
    console.log(city);
    if(this.state.favorites.includes(city)){
      let newState = this.state;
      let newFav = newState.favorites.filter(el=>{
        return el.city_name !== city;
      })
      newState.favorites = newFav;
      sessionStorage.setItem('userData', JSON.stringify(newState));
      this.setState(newState)
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