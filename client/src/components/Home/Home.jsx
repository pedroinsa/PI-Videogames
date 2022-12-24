import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from '../Searchbar/Searchbar.jsx'
import Container from '../Container/Container.jsx';
import Paginado from "../Paginado/Paginado.jsx"
import Videocard from '../Videocard/Videocard.jsx';

import Navbar from '../Navbar/Navbar.jsx';
import * as actions from '../../redux/actions/index'

import './Home.css';

function Home (props) {
 const dispatch = useDispatch()
 const allVideogames= useSelector(state=>state.videogames)
 const [videogamesPerPage, setVideogamesPerPage] = React.useState(15)
 const [currentPage, setCurrentPage] = React.useState(1)

 const indexLast = currentPage *videogamesPerPage
 const indexFirst = indexLast - videogamesPerPage
 const currentVideogames = allVideogames.slice(indexFirst,indexLast)
 const paginado = (pageNumber)=>{ setCurrentPage(pageNumber)} 
 function handlerInput(e){
    dispatch(actions.filterByOrigin(e.target.value))
}

 React.useEffect(()=>{
     dispatch(actions.getAllVideogames())
    //  dispatch(actions.getGenre())
 },[])


    return (
        <div className='home'>
            <Navbar/>
            <Searchbar/>
            <div>
                <label>Origen</label>
                <select onChange={(e)=>handlerInput(e)}>
                    <option value="all">Todos</option>
                    <option value="Api">Videojuegos API</option>
                    <option value="createdInDb">Personalizados</option>
                </select>
                </div>
               <div>
                <label>Por genero</label>
                <select>
                

                </select>
                </div>
        
            <div>
                <label>Alfabetico</label>
                <select>
                    <option value="">Seleccionar </option>
                    <option value="Descendente">A-Z</option>
                    <option value="Ascendente">Z-A</option>
                </select>
            </div>
            {!allVideogames.length && <h2>Loading...</h2>}
            {"hola"}
            {currentVideogames.length}
            <div className='videocards'>
            {currentVideogames.length && currentVideogames.map(x=><Videocard className="videocard" key={x.id} name={x.name} genres={x.genres}/>)}
            </div>
            <Paginado porPage={videogamesPerPage} videogames={allVideogames.length} paginado={paginado}/>
           
        </div>
    )
}



export default Home