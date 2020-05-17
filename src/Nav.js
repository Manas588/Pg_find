import React from "react";


const Nav = ({onClick})=> {
    return(
        
            <div onClick={onClick} className='grow white-60 pointer underline link f3'
            style={{position: 'fixed', right: '3vw', top: '3vh'}}>
                Home
            </div>
        
    );
}
export default Nav;