import React from 'react';
import {useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../../redux/actions/index'
import Navbar from '../Navbar/Navbar';
import './Detail.css'

function Detail (){
    const {id} = useParams()
    const dispatch = useDispatch()
React.useEffect(()=>{
dispatch(actions.getVideogameDetails(id))
return ()=> dispatch(actions.cleanDetail())
},[])

const detail = useSelector(state=> state.videogameDetail)

return(<div className='detail'> 
    <Navbar/>
    {detail.name ? <h1>{detail.name}</h1>: <h1>Loading</h1>}
    {detail.image && <img src={detail.image} alt="imagen-videogame"/>}
    {detail.description && <h3>Description: {detail.description}</h3>}
    {detail.released && <h3>Released: {detail.released}</h3> }
    {detail.rating  && <h3>Rating: {detail.rating}</h3> }
    {detail.platforms && <h3>Platforms: </h3>}
    <ul>
        {detail.platforms && detail.platforms.map(element=> <li>{element.platform.name}</li> )}
    </ul>
    {detail.genres && <h3>Genres: </h3> }
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
