import React from 'react';
import * as actions from '../../redux/actions/index'
import {useDispatch} from "react-redux"

function Searchbar(props){
    const [input, setInput]= React.useState("")
    const dispatch = useDispatch()

 function handlerChange(e){
     setInput(e.target.value)
 }
 function handlerClick(e){
    if(input.length) dispatch(actions.getVideogames(input))
 }
    return(<div>
          <input value={input} onChange={handlerChange}/>
          <button onClick={handlerClick}>BUSCAR!</button>

    </div>)
}


export default Searchbar