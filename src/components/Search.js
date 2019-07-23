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
          cityName: 'tacoma',
          population: '100',
          latitude: '19',
          longitude: '45',
          quality: {},
        }
        
      }
    

  }
  handleClick = (e) => {
    e.preventDefault();
    superagent.get('http://5d3246fc4901b4001401a82e.mockapi.io/city')
    .then(result => {
      console.log(result.body);
      let newState = this.state;
      newState.cityData = result.body[0];
      newState.input = '';
      this.setState(newState);
    });
  
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
        <section>
        <h3>{this.state.cityData.cityName}</h3>
          <p>{this.state.cityData.population}</p>
          <div>latitude: {this.state.cityData.latitude} longitude: {this.state.cityData.longitude}</div>
          <div>Quality of Life</div>
          
          { this.props.userData.favorites.includes(this.state.cityData.cityName)
          ? <button onClick={this.removeFavorite}> Remove From Fav</button>
          : <button onClick={this.addFavorite}> Add to Favorite</button>
        }
          
          
        </section>
        <section id="chart">
           
        <Bar 
        data={{labels: ['Housing', 'Cost of living', 'Startups', 'Venture Capital', 'Travel Connectivity', 'Commute', 'Business Freedom','Safety','Health Care', 'Education', 'Environmental Quality', 'Economy', 'Taxation', 'Internet access', 'Leisure & Culture', 'Tolerance', 'Outdoors'],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [2.29, 3.79, 8.36, 7.55, 2.88, 4.52, 8.67, 5.63, 8.72, 5.71, 7.56, 6.51, 4.77, 4.94, 8.11, 8.08, 7.20]
          }
        ]}}
        
        />
    </section>

      </Fragment>
    )

  }

}

export default Search;