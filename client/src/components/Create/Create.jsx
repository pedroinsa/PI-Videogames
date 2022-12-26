import React from 'react';
import Navbar from '../Navbar/Navbar';
import "./Create.css"

function Create (props){
const [input, setInput] = React.useState({name:"", description:"",released:"", rating: 0})        

return (<div>
        <Navbar/>
        <h2>CREA TU PROPIO VIDEOJUEGO!</h2>
        <form > 
           <label>Name:</label>
           <input type="text"/>
           <label>Description:</label>
           <input type="text"/>
           <label>Released:</label>
           <input type="text"/>
           <label>Rating:</label>
           <select>
                  <option value ="1">1</option> 
                  <option value ="2">2</option> 
                  <option value ="3">3</option> 
                  <option value ="4">4</option> 
                  <option value ="5">5</option> 
                  <option value ="6">6</option> 
                  <option value ="7">7</option> 
                  <option value ="8">8</option> 
                  <option value ="9">9</option> 
                  <option value ="10">10</option> 
           </select>
           <button>Crear!</button>
        </form>
        </div>
                )
}

export default Create


// - Nombre
// - Descripción
// - Fecha de lanzamiento
// - Ratingn