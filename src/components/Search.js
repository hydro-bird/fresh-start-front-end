import React, { Fragment, Component } from 'react';

import NavBar from './NavBar';
import superagent from 'superagent';
import { Bar } from 'react-chartjs-2';
import "../App.css";
import { Button, Icon} from 'semantic-ui-react';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      cityData: {
        name: '',
        population: '',
        latitude: '',
        longitude: '',
        geoNameId: '',
        categories: [],
      }

    }


  }
  handleClick = (e) => {
    e.preventDefault();
    (async () => {
      let response = await superagent.get(`https://fresh-start-back-end.herokuapp.com/search?city=${this.state.input}`)
      let newState = this.state;
      newState.cityData.name = response.body.name;
      newState.cityData.population = response.body.population;
      newState.cityData.latitude = response.body.latitude;
      newState.cityData.longitude = response.body.longitude;
      newState.cityData.geoNameId = response.body.geoNameId;
      newState.cityData.categories = response.body.categories;

      await this.setState(newState);

      console.log(this.state);
    })();
  }
  handleInput = (e) => {
    let newState = this.state;
    newState.input = e.target.value;
    this.setState(newState);
  }
  removeFavorite = () => {

    this.props.handleFavoriteRemove(this.state.cityData.name);
  }
  addFavorite = () => {
    this.props.handleFavoriteAdd(this.state.cityData.name,this.state.cityData.geoNameId);
  }

  render() {
    return (
      <Fragment>
        <NavBar userData={this.props.userData}></NavBar>
        <h2 className="searchForCity">Search For a City</h2>
        <input placeholder="City Name" onChange={this.handleInput} value={this.state.input}></input>
        <button onClick={this.handleClick}>Search</button>
        {this.state.cityData.name !== '' ?
          <Fragment>
            
            <section className="cityInfo">
              <section className="thumbsup">
              <h3>{this.state.cityData.name} {this.props.userData.favorites.includes(this.state.cityData.name)
                ?  <Icon onClick={this.removeFavorite} color='green' size='small' name='thumbs up'/>
                :  <Icon icon onClick={this.addFavorite} color='grey' name='thumbs up' size='small'/>
              }
              </h3>
              
            
              </section>
              <p><b>Population: </b>{this.state.cityData.population}</p>
             
                <p><b>latitude: </b> {this.state.cityData.latitude} </p>
               <p> <b>longitude: </b>{this.state.cityData.longitude} </p>
              
              

              
            </section>

            <section id="chart">

              <Bar
              options= {{
                legend:{
                  labels:{
                    boxWidth: 0,
                    fontColor: 'aqua',
                    fontSize: 30,

                  },
                 
                },
                scales: {
                xAxes: [
                  {
                    ticks:{
                      fontColor: 'aqua',
                      fontSize: 15,
                    }
                  }
                ],
                yAxes: [
                  {
                    ticks:{
                      fontColor: 'aqua',
                      fontSize: 15,
                    }
                  }
                ]
              }
              }}
              
                data={{
                  labels: this.state.cityData.categories.map(el => el.name),
                  datasets: [
                    {
                      label: 'Quality of Life',
                      backgroundColor: this.state.cityData.categories.map(el => el.score_out_of_10 > 7 ? 'green' : el.score_out_of_10 > 4 && el.score_out_of_10 <= 7 ? 'yellow' : 'red'),
                      borderWidth: 1,
                      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                      hoverBorderColor: 'rgba(255,99,132,1)',
                      
                      
                      data: this.state.cityData.categories.map(el => el.score_out_of_10)
                    }
                  ]
                  
                }}

              />
            </section>
          </Fragment>
          : <h3></h3>}
      </Fragment>
    )

  }

}

export default Search;