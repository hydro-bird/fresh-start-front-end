import React, { Component } from 'react';
import {
  
  Route,
  Switch
} from 'react-router-dom';

import AboutUs from "./AboutUs.js";
import Home from "./Home.js";
import Favorites from "./Favorites.js";

import "../App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }

  }
  
  render() {
    return (
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about-us" component={AboutUs} />
        <Route path="/favorites" component={Favorites} />
      </Switch>

    )

  }

}

export default App;
