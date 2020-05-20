import React from "react";
import './Cards.css';
import face from './pg4.jpg';
import { Link } from "react-router-dom";


class Cards extends React.Component{
    constructor(props) {
        super(props)
        
    }
    render() {
        const {name, foodrating, roomrating, servicerating, id, city} = this.props;
        const idstring = toString(id);
        console.log(id)
        return (
            <Link to={{pathname:`${process.env.PUBLIC_URL}/${city}/${id}`, foo: "foo"}} params={{goo: "goo"}} 
            target="_blank" style={{ textDecoration: 'none' }}>
                <div className='card grow shadow-5 tl ma1 br4 f4 '>
                    <img  className='shadow-5 bw2 b--black img-responsive' src={face} alt='face'
                    style={{width: 'auto', height:'100px',borderRadius: '10%'}}/>
                    <div className='white   f3' style={{textDecoration:'none', fontSize: '3vw'}} >{name}</div>
                    <div>
                        <div className='white   f4'  style={{textDecoration:'none', fontSize: '2vw'}}>{`Average Rating: ${(foodrating + roomrating + servicerating)/3}/10`}</div>
                    
                    </div>
                </div>
            </Link>
            
        );
    }
}
export default Cards;