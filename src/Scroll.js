import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className='sc' style={{overflowY:'auto',height:'90vh'}}>
            {props.children}
        </div>
    );

}

export default Scroll;