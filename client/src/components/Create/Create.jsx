import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index'
import Navbar from '../Navbar/Navbar';
import "./Create.css"

function Create (props){
 
    
const [input, setInput] = React.useState({name:"", description:"",released:"", rating: 0, platforms: [], generos: []}) 
const [error, setError] = React.useState({})
const dispatch = useDispatch()      
const platforms = useSelector(state=> state.platforms)  
const genres = useSelector(state=> state.genres)   
function handlerInput(e){
        setInput({...input, [e.target.name]: e.target.value})
}
function handlerInputRating(e){
        setInput({...input, [e.target.name]: parseInt(e.target.value)})
}
function handlerSelectOptions(e){
        setInput({...input, [e.target.name]: Array.from(e.target.selectedOptions, (elem) =>{return{platform: {name: elem.value }}})})
}
function handlerSelectOptions2(e){
        setInput({...input, [e.target.name]: Array.from(e.target.selectedOptions, (elem) => parseInt(elem.value))})
}
function handlerSubmit(e){
        e.preventDefault()
        dispatch(actions.createVideogame(input))
}
function validate(input){

}
return (<div>
        <Navbar/>
        <h2>CREA TU PROPIO VIDEOJUEGO!</h2>
        <form onSubmit={handlerSubmit} > 
           <label>Name:</label>
           <input onChange={handlerInput} name="name" type="text" />
           <label>Description:</label>
           <input onChange={handlerInput} name= "description" type="text"/>
           <label>Released:</label>
           <input onChange={handlerInput} name="released" type="date" />
           <label>Rating:</label>
           <select name="rating"  onChange={handlerInputRating}>
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
          <select onChange={handlerSelectOptions} name="platforms" multiple={true}>
                  {platforms && platforms.map(x=> <option key={x} value={x}>{x}</option>)}

          </select>
          <select  onChange={handlerSelectOptions2} name="generos" multiple={true}>
               {genres && genres.map(elem=> <option key={elem.id} value={elem.id}>{elem.name}</option>)}
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