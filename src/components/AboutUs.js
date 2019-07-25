import React, { Fragment, Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import NavBar from './NavBar.js';
import "../App.css";


class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }

  }



  render() {
    return (
      <Fragment>
        <NavBar></NavBar>
        <div className="aboutus">
          <section className="peter">
            <ul style={{ fontSize: '20px' }}>
              <li style={{ marginBottom: '10px' }}><b>Peter Lee</b></li>
              <li style={{ display: 'inline' }}><a href='mailto:leepj85@gmail.com' ><Icon name='mail' ></Icon></a> </li>
              <li style={{ display: 'inline' }}><a href='https://github.com/leepj85' target='_blank'><Icon name='github' ></Icon></a></li>
              <li style={{ display: 'inline' }}><a href='https://www.linkedin.com/in/leepj85/' target='_blank'><Icon name='linkedin' ></Icon></a> </li>
              <li></li>
            </ul>
          </section>
          <section className="fabian">

            <ul style={{ fontSize: '20px' }}>
              <li style={{ marginBottom: '10px' }}><b>Fabian Brooks</b></li>
              <li style={{ display: 'inline' }}><a href='fabian.brooks.one@gmail.com' ><Icon name='mail' ></Icon></a> </li>
              <li style={{ display: 'inline' }}><a href='https://github.com/FabianB14' target='_blank'><Icon name='github' ></Icon></a></li>
              <li style={{ display: 'inline' }}><a href='https://www.linkedin.com/in/fabian-brooks/' target='_blank'><Icon name='linkedin' ></Icon></a> </li>
              <li></li>
            </ul>
          </section>
          <section className="trevor">
            <ul style={{ fontSize: '20px' }}>
              <li style={{ marginBottom: '10px' }}><b>Trevor Dobson</b></li>
              <li style={{ display: 'inline' }}><a href='trevorjdobson@gmail.com' ><Icon name='mail' ></Icon></a> </li>
              <li style={{ display: 'inline' }}><a href='https://github.com/trevorjdobson' target='_blank'><Icon name='github' ></Icon></a></li>
              <li style={{ display: 'inline' }}><a href='https://www.linkedin.com/in/trevorjdobson/' target='_blank'><Icon name='linkedin' ></Icon></a> </li>
              <li></li>
            </ul>
          </section>
          <section className="roman">
            <ul style={{ fontSize: '20px' }}>
              <li style={{ marginBottom: '10px' }}><b>Roman Gebrehiwot</b></li>
              <li style={{ display: 'inline' }}><a href='rttgg1@gmail.com' ><Icon name='mail' ></Icon></a> </li>
              <li style={{ display: 'inline' }}><a href='https://github.com/rttgg' target='_blank'><Icon name='github' ></Icon></a></li>
              <li style={{ display: 'inline' }}><a href='https://www.linkedin.com/in/roman-gebrehiwot/' target='_blank'><Icon name='linkedin' ></Icon></a> </li>
              <li></li>
            </ul>
          </section>
        </div>
      </Fragment>
    )

  }

}

export default AboutUs;