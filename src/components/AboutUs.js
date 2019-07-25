import React, { Fragment, Component } from 'react';

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
          <ul style={{fontSize:'20px'}}> 
            <li><b>Peter Lee</b></li>
            <li>email: leepj85@gmail.com </li>
            <li>github: https://github.com/leepj85 </li>
            <li>linkedin: https://www.linkedin.com/in/leepj85/ </li>
            <li></li>
          </ul>
        </section>
        <section className="fabian">
          
        <ul style={{fontSize:'20px'}}> 
            <li><b>Fabian Brooks</b></li>
            <li>email: fabian.brooks.one@gmail.com </li>
            <li>github: https://github.com/FabianB14 </li>
            <li>linkedin: https://www.linkedin.com/in/fabian-brooks/</li>
            <li></li>
          </ul>
        </section>
        <section className="trevor">
        <ul style={{fontSize:'20px'}}> 
            <li><b>Trevor Dobson</b></li>
            <li>email: trevorjdobson@gmail.com </li>
            <li>github:  </li>
            <li>linkedin: </li>
            <li></li>
          </ul>
        </section>
        <section className="roman">
        <section className="trevor">
        <ul style={{fontSize:'20px'}}> 
            <li><b>Roman Gebrehiwot</b></li>
            <li>email: rttgg1@gmail.com </li>
            <li>github: https://github.com/rttgg </li>
            <li>linkedin: https://www.linkedin.com/in/roman-gebrehiwot/ </li>
            <li></li>
          </ul>
        </section>
        </section>
      </div>
      </Fragment>
    )

  }

}

export default AboutUs;