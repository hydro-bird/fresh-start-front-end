import React, { Fragment, Component } from 'react';

import NavBar from './NavBar'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }
  handleClick = (e) => {
    e.preventDefault();
    console.log('click')
  }

  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <h1>Search For a City</h1>
        <input placeholder="City Name"></input>
        <button onClick={this.handleClick}>Search</button>
        <section>
          <h3>Seattle</h3>
          <p>Population</p>
          <div>MAP GOES Here</div>
          <div>Quality of Life</div>
        </section>
      </Fragment>
    )

  }

}

export default Search;