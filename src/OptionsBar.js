import React from "react";
import './OptionsBar.css'
// import './Cards.css';
// import face from './face.jpg';

class OptionsBar extends React.Component{
    
    
    render() {
        
        const areas = [... new Set( this.props.citydata.map(pg=>pg.area))]
        
        
        const {onclick} = this.props
        return (
            <div className='center br2 ' style={{display:'flex' ,flexWrap: 'wrap' ,justifyContent:'center' , width:'90vw', fontSize:'1vw'}}>
                <button onClick={()=>onclick(areas[0])} className=' f3 grow w-25 br1 ph1 pa1 mh0 bw1  white  back' style={{fontSize: '2.5vw'}}>{areas[0]}</button>
                <button onClick={()=>onclick(areas[1])} className=' f3 grow w-25 br1 pa1 ph1 mh0 bw1  white  back' style={{fontSize: '2.5vw'}}>{areas[1]}</button>
                <button onClick={()=>onclick(areas[2])} className=' f3 grow w-25 br1 pa1 mh0 ph1  bw1  white  back' style={{fontSize: '2.5vw'}}>{areas[2]}</button>
                <button onClick={()=>onclick(areas[3])} className='f3 grow w-25 br1 pa1 mh0 bw1  ph1 white  back' style={{fontSize: '2.5vw'}}>{areas[3]}</button>
                
            </div>
            
        );
    }
}
export default OptionsBar;