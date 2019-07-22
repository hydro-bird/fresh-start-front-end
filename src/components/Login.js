import React, { Fragment, Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';

import Search from './Search.js'


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
      <Fragment>
        <h1>FRESH START</h1>
        <input onChange={this.handleInput} value={this.state.input} placeholder='Email'></input>
        <button onClick={this.handleClick}>GO</button>
      </Fragment>

    )

  }

}

export default Login;