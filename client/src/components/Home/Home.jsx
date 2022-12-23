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


 React.useEffect(()=>{
     dispatch(actions.getAllVideogames())
 },[])


    return (
        <div className='home'>
            <Navbar/>
            <Searchbar/>
            <form>
                <label>Origen</label>
                <select>
                    <option value="">Videojuegos API</option>
                    <option value="">Personalizados</option>
                </select>
                <button>Filtrar!</button>
            </form>
            <form>
                <label>Por genero</label>
                <select>

                </select>
                <button>Filtrar</button>
            </form>
            <form>
                <label>Alfabetico</label>
                <select>
                    <option value="">A-Z</option>
                    <option value="">Z-A</option>
                </select>
                <button>Ordenar!</button>
            </form>
            {allVideogames.length}
            {"hola"}
            {currentVideogames.length}
            {currentVideogames.length && currentVideogames.map(x=><Videocard key={x.id} name={x.name} genres={x.genres}/>)}
            <Paginado porPage={videogamesPerPage} videogames={allVideogames.length} paginado={paginado}/>
           
        </div>
    )
}



export default Home