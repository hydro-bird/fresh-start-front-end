import React, { Fragment, Component } from 'react';

import NavBar from './NavBar';
import superagent from 'superagent'


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  handleClick = (e) => {
    e.preventDefault();
    superagent.get('http://5d3246fc4901b4001401a82e.mockapi.io/city')
    .then(result => {
      console.log(result.body);
      let newState = this.state;
      newState = result.body[0];
      this.setState(newState);
    });

  }

  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <h1>Search For a City</h1>
        <input placeholder="City Name"></input>
        <button onClick={this.handleClick}>Search</button>
        <section>
        <h3>{this.state.cityName}</h3>
          <p>{this.state.population}</p>
          <div>latitude: {this.state.latitude} longitude: {this.state.longitude}</div>
          <div>Quality of Life</div>
        </section>
      </Fragment>
    )

  }

}

export default Search;