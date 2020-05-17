import React from "react";
import pg1 from './pg1.jpg';
import pg2 from './pg2.jpg';
import pg3 from './pg3.jpg';
import pg4 from './pg4.jpg';
import './House.css'
import Scroll from './Scroll';
import Carousel from 'react-bootstrap/Carousel'


import { Link } from "react-router-dom";

class House extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            pgdata: {},
            pgfeatures:{}
        }
    }
    componentDidMount(){
        const  { id }= this.props.match.params;
        const  { city }= this.props.match.params;
        
        
        fetch(`http://localhost:3001/Pgfind/${city}`)
        .then(response=>response.json())
        .then(data=>{
            const pg = data.filter(pg=>pg.id == id)
            
            this.setState({pgdata:pg[0]})         
        }).catch(err=>console.log(err))
        console.log(this.state.pgdata)
        fetch(`http://localhost:3001/Pgfind/Features?id=${id}`)
        .then(response=>response.json())
        .then(data=>this.setState({pgfeatures: data[0]}))
            
          
    }
    render() {
        if(this.state.pgdata.id){
            console.log(this.state.pgdata)
        return (
            <div className=' h1'>
                
                <div className=' br2 house tc bg-black-30 shadow-5'>
                    <Scroll>
                        <div className='mt3 mb3' style={{display:'flex', flexWrap:'wrap', justifyContent:'center', alignItems:'center'}}>
                            <img  className='mr2 shadow-5 bw1 b--white ba' src={pg1} alt='face'
                            style={{alignSelf:'center',justifySelf:'center', width: '200px', height:'200px',borderRadius: '50%'}}/>
                            
                            <div  className='ml4 tl white ph0' style={{alignSelf:'center', justifySelf:'center', width:'400px'}}>
                                <p className='yellow mh0 f3'> {'Name: '}</p>
                                <p className='mh0 green f4'>{this.state.pgdata.name}</p>
                                
                            </div>
                            <div  className='white ml4 br4' style={{alignSelf:'center', width:'400px'}}>
                                <p className='yellow tl f3'>{'Address: '}</p>
                                <p className='tl green f4'>
                                {this.state.pgdata.address}
                                </p>
                            </div>

                        
                        </div>
                       <div style={{width:'70%', alignSelf:"center", justifySelf: 'center', margin: '0 auto'}} className="mv3  tc pa2 br2 b--white">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={pg1}
                                alt="First slide"
                                
                                />
                              
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={pg2}
                                alt="Third slide"
                                
                                />

                                
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 tc"
                                src={pg3}
                                alt="Third slide"
                                
                                />

                                
                            </Carousel.Item>
                        </Carousel>
                        </div>
                           
                       
                        <div className=' br4 ma2 mv4 mh4' style={{ }}>
                            <p className="yellow f3 tl">Features:</p>
                            {(Object.keys(this.state.pgfeatures).filter(key=>key!=="id"))
                            .map(key=><p className="green f4 tl">{`${key.toUpperCase()}: ${this.state.pgfeatures[key]}`}</p>)}
                        </div>
                        <div className=' br4 white ma2 mh4' style={{display:"flex",flexDirection:"row", flexWrap:"wrap", alignItems:"center"}}>
                            <p className="f3 yellow tl mr3">Rating:</p>
                            <p className="f4 green mh3 tl">{`Food Rating: ${this.state.pgdata.food_rate}/10`}</p>
                            <p className="f4 green mh3 tl">{`Food Rating: ${this.state.pgdata.room_rate}/10`}</p>
                            <p className="f4 green mh3 tl">{`Food Rating: ${this.state.pgdata.services_rate}/10`}</p>
                        </div>
                    </Scroll>
                </div>
                
            </div>
        );} else {
            return <p className="tc mv5 f2 white">Loading...</p>
        }
    }
}
export default House;