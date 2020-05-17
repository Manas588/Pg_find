import React from 'react';
import CardOptions from './CardOptions';
import OptionsBar from './OptionsBar';
import Scroll from './Scroll';

class BigOne extends React.Component {
    constructor(props) {
      super(props);
      
      this.state = {
       show: '',
       whichwasclicked: '',
       citydata: []
    
      }
    }
  
    componentDidMount() {
      fetch(`http://localhost:3001/Pgfind/${this.props.city}`)
      .then(response=>response.json())
      .then(data=> {this.setState({citydata: data}) }).catch(err=>console.log(err))
      
      
    }
   
    onclick = (isClicked)=>{
        if (isClicked===this.state.whichwasclicked){
          this.setState({show: ''});
          this.setState({whichwasclicked: ''});
        } else {
          this.setState({show: isClicked});
          this.setState({whichwasclicked:isClicked})
          
          
        }
        
      
        

      }
    
    render() {
       if (this.state.citydata.length === 0) {
         return <p className="tc f1">Loading...</p>
       } else {
          return (
              <div className="App">
                
                <OptionsBar onclick={this.onclick} citydata= {this.state.citydata}/>
                <div className= 'animated lightSpeedInRight'>
                  <Scroll >
                    <CardOptions show={this.state.show}  citydata={this.state.citydata} city={this.props.city}/>
                  </Scroll>
                </div>
              </div>
            );
          }
       
      
    }
  }
  
  export default BigOne;