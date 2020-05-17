import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Nav from './Nav';
import CityName from './CityName';
// import Cards from './Cards';
import BigOne from './BigOne';
import Home from './Home';


  
  
  class MainPage extends React.Component {
    constructor() {
      super();
      this.state = {
        currentstate :'home',
        
      }
    }
  
    onimageclick = (city)=> {
   
      this.setState({currentstate: city})
      
      }
    
    onNavclick= ()=>{this.setState({currentstate: 'home'})}
   
    render() {
      if(this.state.currentstate==='home') {
        return(
          <div className='animated  App'>
          
          <Home onimageclick={this.onimageclick}/>
          </div>
        );
      } else {
        return (
  
          <div className=" animated bounceInDown App">
              <Nav onClick={this.onNavclick} />
              <CityName city={this.state.currentstate}/>
              
              <BigOne  city={this.state.currentstate}/>
              
          </div>
        );
      }
      
        
    } 
  }
  
  export default MainPage;
  