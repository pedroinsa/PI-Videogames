import {
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAME_DETAILS,
    GET_VIDEOGAMES,
    CREATE_VIDEOGAME,
    GET_GENRE,
    FILTER_BY_ORIGIN
 } from "../actions";
 
 const initialState = {
    videogames: [],
    videogamesComplete: [],
    videogameDetail: {},
 };
 

 
 const rootReducer = (state = initialState, action) => {
   // eslint-disable-next-line default-case
   switch (action.type) {
    case GET_ALL_VIDEOGAMES:
       return{...state, videogames: action.payload, videogamesComplete: action.payload}
    case GET_VIDEOGAME_DETAILS:
       return {...state,videogameDetail: action.payload}
    case GET_VIDEOGAMES: 
    return {...state, videogames:action.payload }   
    case FILTER_BY_ORIGIN:
       let allgames = state.videogamesComplete
       let filtrado
       if(action.payload === "createdInDb"){
          filtrado = allgames.filter(e=> e.createdInDb)
        }else if(action.payload === "all"){  filtrado = allgames}
        else if(action.payload === "Api") {filtrado = allgames.filter(e=> !e.createdInDb)
        }
        return{...state, videogames: filtrado}
    
   //  case CREATE_BANDS:
   //     return{...state, bands: [...state.bands, action.payload]}
   //  case DELETE_BANDS:
   //         return{...state, bands: state.bands.filter(elem=> elem.id !== action.payload)}
    default: return state
   }
 };
 
 export default rootReducer;
 