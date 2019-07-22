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
import Home from './Home.js'
import Favorites from './Favorites.js';


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
