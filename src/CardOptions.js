import React from "react";
import './CardOptions.css';
// import face from './face.jpg';
import Cards from './Cards';

const CardOptions = ({show,citydata, city})=> {
    //console.log(show);
    
    const s = show
    const arealist = citydata.filter(element=>element.area === show)
    if (s) {
        return (
        <div id="list"  className='center br2' >
            {
                arealist.map(card=><Cards name={card.name} foodrating={card.food_rate} roomrating={card.room_rate} 
                servicerating={card.services_rate} id={card.id} city={city}/>)
            }
        </div>
            
        );
    } else {
        return(
            <div></div>
        );
    }
}
export default CardOptions;