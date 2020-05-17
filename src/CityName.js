import React from "react";


// import face from './face.jpg';
import './CityName.css';
import mumbai from "./mumbai.jpg";
import hyderabad from "./Hyderabad.jpg";
import kolkata from "./kolkata.jpg";

const CityName = ({city})=> {
    if (city==='Mumbai') {
        return (
            <div className='city'>
                <img  className='grow shadow-5 ma4 bw2 b--white ba' src={mumbai} 
                alt='face' style={{width: '150px', height:'150px',borderRadius: '150px'}}/>
                <p className='f3  bg-white-10 tc white br3 grow shadow-5 pa2'>Mumbai</p>
                
            </div>
          
        );
        
    } else if (city === 'Kolkata') {
        return (
            <div className='city'>
                <img  className='shadow-5 ma4 bw2 b--white ba' src={kolkata} 
                alt='face' style={{width: '150px', height:'150px',borderRadius: '150px'}}/>
                <p className='f3 bg-white-10 white br3 shadow-5 pa2 grow'>Kolkata</p>
                
            </div>
          
        );

    } else {
        return (
            <div className='city'>
                <img  className='shadow-5 ma4 bw2 b--white ba' src={hyderabad} 
                alt='face' style={{width: '150px', height:'150px',borderRadius: '150px'}}/>
                <p className='f3 br3 bg-white-10 white shadow-5 pa2 grow'>Hyderabad</p>
                
            </div>
          
        );
    }
   
}
export default CityName;