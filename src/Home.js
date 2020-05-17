import React from "react";
import "./Home.css";
import mumbai from "./mumbai.jpg";
import hyderabad from "./Hyderabad.jpg";
import kolkata from "./kolkata.jpg";

const Home = ({onimageclick})=> {
    return(
        
            <div className='main animated backInRight'>
                <div className="tc f1 yellow">CHOOSE A CITY</div>
                <div className='group'>
                    
                    <div>
                        <img onClick={()=>onimageclick('Kolkata')} className='shadow-5 grow link ma4  bw2 b--white ba' src={kolkata} alt='face'
                        style={{alignSelf:'flex-end', width: '200px', height:'200px',borderRadius: '200px'}}/>
                        <p className="f2 white">Kolkata</p>
                    </div>
                    <div>
                        <img onClick={()=>onimageclick('Mumbai')} className='shadow-5 grow link ma4  bw2 b--white ba' src={mumbai} alt='face'
                        style={{alignSelf: 'flex-start', width: '200px', height:'200px',borderRadius: '200px'}}/>
                        <p className="f2 white">Mumbai</p>
                    </div>
                    <div>
                        <img onClick={()=>onimageclick('Hyderabad')} className='shadow-5 grow link ma4  bw2 b--white ba' src={hyderabad} alt='face'
                        style={{alignSelf: 'flex-end', width: '200px', height:'200px',borderRadius: '200px'}}/>
                        <p className="f2 white">Hyderabad</p>
                    </div>
                </div>
            </div>
        
    );
}
export default Home;