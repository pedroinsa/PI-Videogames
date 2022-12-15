import React from 'react';
import image from "../components/videogame.jpg"
import {Link} from 'react-router-dom'
import './Landing.css';
function Landing (props){
    

    return (
        <div >
            <img src={image}  alt="videogame" />
            <Link to="/home">
                <button>ingresar</button>
            </Link>
           
        </div>
    )
}

export default Landing