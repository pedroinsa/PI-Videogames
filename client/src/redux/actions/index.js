const axios = require('axios')
export const GET_ALL_VIDEOGAMES = 'GET_ALL_GAMES';
export const GET_VIDEOGAMES = "GET_VIDEOGAME"
export const GET_VIDEOGAME_DETAILS = 'GET_VIDEOGAME_DETAILS';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const GET_GENRE = 'GET_GENRE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const SORT_OF_LIST = "SORT_OF_LIST"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const CLEAN_DETAIL = "CLEAN_DETAIL"


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

export const createVideogame =  (input)=> async (dispatch) =>
  await axios.post("http://localhost:3001/videogames", input)

export const getGenre = () => dispatch => fetch('http://localhost:3001/genres')
.then(data=> data.json()).then(data=> dispatch({type: GET_GENRE, payload: data}))
export const filterByOrigin=(origin)=>{return {type: FILTER_BY_ORIGIN, payload: origin}}

export const filterByGenre = (payload)=>{return {type: FILTER_BY_GENRE, payload}}

export const sortOfList = (payload) => {return {type: SORT_OF_LIST, payload}}

export const getPlatforms=()=>{return {type: GET_PLATFORMS}} 

export const cleanDetail = ()=>{return {type: CLEAN_DETAIL  }}

