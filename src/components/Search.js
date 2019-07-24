import React, { Fragment, Component } from 'react';

import NavBar from './NavBar';
import superagent from 'superagent';
import { Bar } from 'react-chartjs-2';
import "../App.css";


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: '',
        cityData: {
          name: 'tacoma',
          population: '100',
          latitude: '19',
          longitude: '45',
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
  handleInput = (e) =>{
    let newState = this.state;
    newState.input = e.target.value;
    this.setState(newState);
  }
  removeFavorite = () => {
    
    this.props.handleFavoriteRemove(this.state.cityData.cityName);
  }
  addFavorite = () => {
    
    this.props.handleFavoriteAdd(this.state.cityData.cityName);
  }

  render() {
    return (
      <Fragment>
        <NavBar userData={this.props.userData}></NavBar>
        <h2 className="searchForCity">Search For a City</h2>
        <input placeholder="City Name" onChange={this.handleInput} value={this.state.input}></input>
        <button onClick={this.handleClick}>Search</button>
        <section className="cityInfo">
        <h3>{this.state.cityData.name}</h3>
          <p>{this.state.cityData.population}</p>
          <div>latitude: {this.state.cityData.latitude} longitude: {this.state.cityData.longitude}</div>
          <div>Quality of Life</div>
          
          { this.props.userData.favorites.includes(this.state.cityData.name)
          ? <button onClick={this.removeFavorite}> Remove From Fav</button>
          : <button onClick={this.addFavorite}> Add to Favorite</button>
        }
          
          
        </section>
        <section id="chart">
           
        <Bar 
        data={{labels: this.state.cityData.categories.map(el=>el.name),
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: this.state.cityData.categories.map(el => el.score_out_of_10 > 7?'green': el.score_out_of_10 >4 && el.score_out_of_10 <= 7?'yellow': 'red'),
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: this.state.cityData.categories.map(el=>el.score_out_of_10)
          }
        ]}}
        
        />
    </section>

      </Fragment>
    )

  }

}

export default Search;