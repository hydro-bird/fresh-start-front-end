import React, { Fragment, Component } from 'react';
import { Accordion, Icon} from 'semantic-ui-react';
import superagent from 'superagent';
import NavBar from './NavBar';


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
      cities: [ 
        {
          cityName: 'seattle',
          population: '10',
          latitude: '39',
          longitude: '19',
          qulatiy: {},
        },
        {
          cityName: 'tacoma',
          population: '100',
          latitude: '19',
          longitude: '45',
          qulatiy: {},
        }
      ],

    }

  }
  componentDidMount(){
    console.log(this.props.location);
    // let newState = this.state;
    // newState.userData = this.props.location.state.userData
    // this.setState(newState);
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
  }

  removeFavorite = (e)=>{
    console.log('click')
    console.log(e.target.name)
  }
  addFavorite = (e)=>{
    console.log('click')
    console.log(e.target.name)
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Fragment>
      <NavBar></NavBar> 
      <Accordion fluid styled>
      {
        this.state.cities.map((el,i) => {
          return(
            <Fragment key={Math.random()}>
               <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
          <Icon name='dropdown' />
          {el.cityName}
        </Accordion.Title>
        <Accordion.Content active={activeIndex === i}>
          
          
          <p>{el.population}</p>
          <div>latitude: {el.latitude} longitude: {el.longitude}</div>
          <div>Quality of Life</div>
          
          <button onClick={this.removeFavorite} name={el.cityName}> Remove From Fav</button>
         
        </Accordion.Content>
        </Fragment>
          )
        })
      }
   
     
   
      </Accordion>
      </Fragment>
    )
  }

}

export default Favorites;