import {
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAME_DETAILS,
    GET_VIDEOGAMES,
    CREATE_VIDEOGAME,
    GET_GENRE,
 } from "../actions";
 
 const initialState = {
    videogames: [],
    videoGameDetail: {},
 };
 

 
 const rootReducer = (state = initialState, action) => {
   // eslint-disable-next-line default-case
   switch (action.type) {
    case GET_ALL_VIDEOGAMES:
       return{...state, videogames: action.payload}
    case GET_VIDEOGAME_DETAILS:
       return {...state,videoGameDetail: action.payload}
    case GET_VIDEOGAMES: 
    return {...state, videogames:action.payload }   
   //  case CREATE_BANDS:
   //     return{...state, bands: [...state.bands, action.payload]}
   //  case DELETE_BANDS:
   //         return{...state, bands: state.bands.filter(elem=> elem.id !== action.payload)}
   //  default: return state
   }
 };
 
 export default rootReducer;
 