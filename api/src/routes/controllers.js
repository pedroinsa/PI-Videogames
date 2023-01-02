const {Videogame, Genero} = require("../db")
const axios = require('axios')
const {
    APIKEY
   } = process.env;
  module.exports= {  
   mergeAll: async () =>{ 
    let url = `https://api.rawg.io/api/games?key=${APIKEY}`
    let array = []
   for(let i=0; i< 5; i++){
     const axiosReq = await axios.get(url)
    axiosReq.data.results.forEach(x=>{
        const obj = {
    
            name : x.name,
            id: x.id,
            released: x.released,
            rating: x.rating,
            platforms: x.platforms,
            image: x.background_image,
            generos: x.genres.map(x=>{return {id: x.id, name: x.name}})
        }
        array.push(obj)
    }) 
       url = axiosReq.data.next
   }
   const db = await Videogame.findAll({include:[{model: Genero}] }) 
   let merge = [...array, ...db]
   return merge
},  
videogameID: async (id)=>{
    let bypk
    let axiosReq
     if(!id)throw Error("ID no especificado")
     if(id.length>7){ bypk = await Videogame.findByPk(id)}

    if(id.length <7){axiosReq = await axios(`https://api.rawg.io/api/games/${id}?key=${APIKEY}`)}
    if(axiosReq){
        const data = axiosReq.data
        const obj = {
            image: data.background_image,
            name: data.name,
            genres: data.genres,
            description: data.description,
            released: data.released,
            rating: data.rating,
            platforms: data.platforms,
            id: data.id
        }
        return obj
    } else if(bypk){
        return bypk
    }else{
        throw Error("no hay resultados")
    }
},
postVideogames: async({name,description,released,rating,platforms, generos})=>{
    if(!name || !description || !released || !rating ||!platforms) throw Error("Faltan campos esenciales")
    if(typeof released !== "string") throw Error("Relesed deber ser un string")
    if(typeof rating !=="number") throw Error("Rating deber ser un numero")
    if(typeof platforms !== "object" && !Array.isArray(platforms)) throw Error("platforms deber ser un array")
    if(typeof generos !== "object" && !Array.isArray(generos)) throw Error("generos deber ser un array")
    const obj = {name,description,released,rating,platforms}
    const db = await Videogame.create(obj)
    db.addGeneros(generos)
    let aux = await Videogame.findByPk(db.id)
    return aux
},
getGenres: async ()=>{
    const getGenres = await axios("https://api.rawg.io/api/genres?key=427f786c4ce944fa906583a7f5705e9b")
  const data = getGenres.data.results
  const mapeo = data.map(element=> {
      const obj = {
          id: element.id,
          name: element.name
      }
      return obj
  })
  await Genero.bulkCreate(mapeo)
  return mapeo
},
withQuery : (array,name)=>{
    let filtrado= array.filter(element=> element.name.toLowerCase().includes(name.toLowerCase()))
    const quince = filtrado.slice(0,15)
    if(!filtrado.length) throw Error("No hay coincidencias")
    return quince

}

}