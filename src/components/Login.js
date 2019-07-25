import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch,
// } from 'react-router-dom';


import "../App.css";



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }

  }
  handleInput = (e) => {
    this.setState({ input: e.target.value })
  }

  handleClick = (e) => {
    e.preventDefault();
    let str = this.state.input;
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(str)) {
      this.props.handleUserSubmit(this.state.input)
    } else {
      alert("Please enter a valid email address");
    }
  }

  render() {
    return (
      <div id="frontStyle" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538097304804-2a1b932466a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80')" }}>
        <h1 className="title">FRESH START</h1>

        <input onChange={this.handleInput} value={this.state.input} placeholder='Email'></input>
        <button onClick={this.handleClick}>GO</button>
      </div>

    )

  }

}

export default Login;