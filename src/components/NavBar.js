import React, { Fragment, Component } from 'react';



class NavBar extends Component {
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
        <p>Fresh Start</p>
        <p>HOME</p>
        <p>About Us</p>
        <p>Favorites</p>
      </Fragment>
    )

  }

}

export default NavBar;