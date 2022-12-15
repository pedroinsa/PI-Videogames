import React from 'react';
import image from "../videogame.jpg"
import {Link} from 'react-router-dom'
import './Landing.css';
function Landing (props){
    

    return (
        <div className='landing' >
            <img src={image}  alt="videogame" />
            <Link to="/home">
                <button>ingresar</button>
            </Link>
           
        </div>
    )
}

export default Landing