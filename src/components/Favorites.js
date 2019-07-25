import React, { Fragment, Component } from 'react';
import { Accordion, Icon, Button } from 'semantic-ui-react';
import superagent from 'superagent';
import NavBar from './NavBar';
import { Bar } from 'react-chartjs-2';
import { async } from 'q';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        userName: '',
        favorites: [],
        id: ''
      },
      activeIndex: 0,
      cities: [],

    }

  }
  componentDidMount() {
    if(sessionStorage.userData){
      let userData = JSON.parse(sessionStorage.getItem('userData'));
      let newState= this.state;
      newState.userData = userData;
      this.setState(newState);
    }
    let newState = this.state;
    (async () => {
      newState.userData = this.state.userData
      if (newState.userData.favorites.length > 0) {
        await newState.userData.favorites.forEach(el => {
          (async () => {

            let response = await superagent.get(`https://fresh-start-back-end.herokuapp.com/search?city=${el.city_name}`)
            
            let newCityObj = {};
            newCityObj.name = response.body.name;
            newCityObj.population = response.body.population;
            newCityObj.latitude = response.body.latitude;
            newCityObj.longitude = response.body.longitude;
            newCityObj.geoNameId = response.body.geoNameId;
            newCityObj.categories = response.body.categories;

            await newState.cities.push(newCityObj);
            
            this.setState(newState);

          })();
        });
      }

    })();


  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  removeFavorite = async(e) => {
    let targetName = e.target.name;
    console.log(targetName)
    let joinId;
    await this.state.userData.favorites.forEach(el=>{
      if(el.city_name === targetName){
        joinId = el.join_id;
      }
    })
    console.log(joinId)
    superagent.put(`https://fresh-start-back-end.herokuapp.com/removefavorites?join_id=${joinId}`)
    .then(result=>{
      (async()=>{
        console.log(targetName)
        let newState = this.state;
        let newFavArr = await newState.userData.favorites.filter(el=>{
        return el.city_name !== targetName;
      });
      console.log(newState.cities)
      let newCitiesArr = await newState.cities.filter(el=>{
        return el.name !== targetName;
      })
      newState.cities = newCitiesArr;
      newState.userData.favorites = newFavArr;
      console.log(newState)
      let userData = await superagent.get(`https://fresh-start-back-end.herokuapp.com/user?email=${this.state.userName}`)
      newState.userName = userData.body.username;
      newState.favorites = userData.body.faveCities.map(el=>el);
      newState.user_id = userData.body.user_id;
      await this.setState(newState);
      sessionStorage.setItem('userData', JSON.stringify(newState));
      })();
    })
    
    
  }
  addFavorite = (e) => {
    console.log('click')
    console.log(e.target.name)
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Fragment>
        <NavBar></NavBar>
        {this.state.userData.favorites.length !== this.state.cities.length? <Icon loading name='spinner' size="massive" color="blue" /> 
        : 
        <Accordion fluid styled>
          {
            this.state.cities.map((el, i) => {
              return (
                <Fragment key={Math.random()}>
                  <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                  <h2 style={{textAlign: 'left'}}><Icon name='dropdown' />{el.name}</h2>
                  
                  </Accordion.Title>
                  <Accordion.Content style={{height:'500px'}}active={activeIndex === i}>
                    <p>{el.population}</p>
                    <div>latitude: {el.latitude} longitude: {el.longitude}</div>
                    <div>Quality of Life</div>
                    <button onClick={this.removeFavorite} name={el.name}> Remove From Fav</button>
                    <section id="chart">

              <Bar
              options= {{
                legend:{
                  labels:{
                    boxWidth: 0,
                    fontColor: 'black',
                    fontSize: 30,

                  },
                 
                },
                scales: {
                xAxes: [
                  {
                    ticks:{
                      fontColor: 'black',
                      fontSize: 15,
                    }
                  }
                ],
                yAxes: [
                  {
                    ticks:{
                      fontColor: 'black',
                      fontSize: 15,
                    }
                  }
                ]
              }
              }}
                data={{
                  labels: el.categories.map(category => category.name),
                  datasets: [
                    {
                      label: 'My First dataset',
                      backgroundColor: el.categories.map(item => item.score_out_of_10 > 7 ? 'green' : item.score_out_of_10 > 4 && item.score_out_of_10 <= 7 ? 'yellow' : 'red'),
                      borderWidth: 1,
                      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                      hoverBorderColor: 'rgba(255,99,132,1)',
                      data: el.categories.map(item => item.score_out_of_10)
                    }
                  ]
                }}

              />
            </section>
                  </Accordion.Content>
                </Fragment>
              )
            })
          }



        </Accordion>
        }
      </Fragment>
    )
  }

}

export default Favorites;