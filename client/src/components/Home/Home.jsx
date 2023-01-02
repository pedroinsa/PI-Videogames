import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
 const allGenres= useSelector(state=>state.genres)
 const [videogamesPerPage, setVideogamesPerPage] = React.useState(15)
 const [currentPage, setCurrentPage] = React.useState(1)
 const [order, setOrder]= React.useState("indistinto")
 const indexLast = currentPage *videogamesPerPage
 const indexFirst = indexLast - videogamesPerPage
 const currentVideogames = allVideogames.slice(indexFirst,indexLast)
 const paginado = (pageNumber)=>{ setCurrentPage(pageNumber)} 
 function handlerInput(e){
    dispatch(actions.filterByOrigin(e.target.value))
    setCurrentPage(1)
}
function handlerInputGenre(e){
    dispatch(actions.filterByGenre(e.target.value))
    setCurrentPage(1)
}
function handlerInputOrder(e){
    dispatch(actions.sortOfList(e.target.value))
    setCurrentPage(1)
    setOrder(`Order ${e.target.value}`)
}

 React.useEffect(async ()=>{
    await dispatch(actions.getAllVideogames())
    dispatch(actions.getPlatforms())
    return ()=> dispatch(actions.cleanAll())
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
                <select onChange={(e)=> handlerInputGenre(e)}>
                {allGenres && allGenres.map(x=> <option value={x.id}>{x.name}</option>)}

                </select>
                </div>
        
            <div>
                <label>Alfabetico</label>
                <select onChange={(e)=>handlerInputOrder(e)}>
                    <option value="indistinto">Indistinto </option>
                    <option value="Descendente">A-Z</option>
                    <option value="Ascendente">Z-A</option>
                    <option value ="Rating">Rating</option>
                </select>
            </div>
            {!allVideogames.length && <h2>Loading...</h2>}
           
            <div className='videocards'>
            {currentVideogames.length && currentVideogames.map(x=><Link to={`/videogame/${x.id}`}> <Videocard key={x.id}  image={x.image} name={x.name} genres={x.generos}/></Link>)}
            </div>
            <Paginado porPage={videogamesPerPage} videogames={allVideogames.length} paginado={paginado}/>
           
        </div>
    )
}



export default Home