const axios = require('axios')
export const GET_ALL_VIDEOGAMES = 'GET_ALL_GAMES';
export const GET_VIDEOGAMES = "GET_VIDEOGAME"
export const GET_VIDEOGAME_DETAILS = 'GET_VIDEOGAME_DETAILS';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const GET_GENRE = 'GET_GENRE';


export const getAllVideogames = () => dispatch=> fetch('http://localhost:3001/videogames')
.then(data=>data.json())
.then(data=> dispatch({type: GET_ALL_VIDEOGAMES, payload: data}))
.catch(e=> console.log(e))
export const getVideogames = (name) => dispatch=> fetch(`http://localhost:3001/videogames?name=${name}`)
.then(data=>data.json())
.then(data=> dispatch({type: GET_VIDEOGAMES, payload: data}))
.catch(e=> console.log(e))




export const getVideogameDetails = (id) => dispatch => fetch(`http://localhost:3001/videogame/${id}`)
.then(data=> data.json())
.then(data=> dispatch({type: GET_VIDEOGAME_DETAILS, payload: data}))
.catch(e=> console.log(e))

export const createVideogame =  (input)=> async(dispatch) =>{
    await axios.post("http://localhost:3001/videogames", input)
}

export const getGenre = () => dispatch => fetch('http://localhost:3001/genres')