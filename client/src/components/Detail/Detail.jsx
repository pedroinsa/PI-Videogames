import React from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/actions/index'
import Navbar from '../Navbar/Navbar';

function Detail (){
    const {id} = useParams()
    const dispatch = useDispatch()
React.useEffect(()=>{
dispatch(actions.getVideogameDetails(id))
})
const detail = useSelector(state=> state.videogameDetail)

return(<div>
    <Navbar/>
    <h1>{detail.name}</h1>
    <img src={detail.image} alt="imagen-videogame"/>
    <h3>Description: {detail.description}</h3>
    <h3>Released: {detail.released}</h3>
    <h3>Rating: {detail.rating}</h3>
    <h3>Platforms: </h3>
    <ul>
        {detail.platforms && detail.platforms.map(element=> <li>{element.platform.name}</li> )}
    </ul>
    <h3>Genres: </h3>
    <ul>
        {detail.genres && detail.genres.map(element=> <li>{element.name}</li> )}
    </ul>



</div>)

}

export default Detail


// image: data.background_image,
// name: data.name,
// genres: data.genres,
// description: data.description,
// released: data.released,
// rating: data.rating,
// platforms: data.platforms,
// id: data.id
