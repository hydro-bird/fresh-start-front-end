import React, { Fragment, Component } from 'react';

import NavBar from './NavBar';
import superagent from 'superagent'


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
        <h1>Search For a City</h1>
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
      </Fragment>
    )

  }

}

export default Search;