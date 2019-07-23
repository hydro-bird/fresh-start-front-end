import React, { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Search from './Search.js'
import "../App.css";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

  }
  handleInput = (e) => {
    console.log(e.target.value)
    this.setState({input: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    this.props.handleUserSubmit(this.state.input)
  }

  render() {
    return (
      <div id="frontStyle" style = {{backgroundImage:"url('https://images.unsplash.com/photo-1538097304804-2a1b932466a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')"}}>
        <h1>FRESH START</h1>

        <input onChange={this.handleInput} value={this.state.input} placeholder='Email'></input>
        <button onClick={this.handleClick}>GO</button>
      </div>

    )

  }

}

export default Login;