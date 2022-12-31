const { Router } = require('express');
const {Videogame, Genero} = require("../db")
const axios = require('axios')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const APIKEY = '427f786c4ce944fa906583a7f5705e9b'
const url = `https://api.rawg.io/api/games?key=${APIKEY}`
const router = Router();


router.get("/videogames", async (req,res)=>{
    // const resp = await axios.get(`https://api.rawg.io/api/games/7?key=${APIKEY}`)
    // res.json(resp.data)
    //  const resp = fetch(`https://api.rawg.io/api/games/7?key=${APIKEY}`).then(data=>data.json())
    //  res.json(resp
    try {
    const {name} = req.query
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
if(!name){
    res.json(merge)
}else if(name){
    const filtrado = merge.filter(element=> element.name.toLowerCase().includes(name.toLowerCase()))
    const quince = filtrado.slice(0,15)
    if(!filtrado.length) throw Error("No hay coincidencias")
    res.status(201).json(quince)
}      
} catch (error) {
    res.status(404).json([])
}
})
router.get("/videogame/:id", async(req,res)=>{
 try {
    const {id} = req.params
    let bypk
    let axiosReq
    //  id = parseInt(id)
    //  console.log(id)
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
        res.json(obj)
    } else if(bypk){
        res.json(bypk)
    }else{
        throw Error("no hay resultados")
    }

     
 } catch (error) {   
    res.status(400).json({error: error.message})
 }
})

router.post("/videogames", async (req,res)=>{
 const {name,description,released,rating,platforms, generos} = req.body
 try {
     if(!name || !description || !released || !rating ||!platforms) throw Error("Faltan campos esenciales")
    if(typeof released !== "string") throw Error("Relesed deber ser un string")
    if(typeof rating !=="number") throw Error("Rating deber ser un numero")
    if(typeof platforms !== "object" && !Array.isArray(platforms)) throw Error("platforms deber ser un array")
    if(typeof generos !== "object" && !Array.isArray(generos)) throw Error("generos deber ser un array")
    const obj = {name,description,released,rating,platforms}
    const db = await Videogame.create(obj)
    db.addGeneros(generos)
    let aux = await Videogame.findByPk(db.id)
    res.json(aux)
     
 } catch (error) {
    res.status(400).json({error: error.message})
   
 }
})
router.get("/genres", async(req,res)=>{
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

  res.json(mapeo)

})

router.post("/post", async(req,res)=>{
 const {description, name, released,rating,platforms} = req.body
 const videojuego = await Videogame.create({description,name,released,rating,platforms})
 res.json({hello: 234})

})
router.get("/bypk/:id", async (req,res)=>{
    const {id} = req.params 
    const bypk = await Videogame.findByPk(id)
    res.json(bypk)
})
router.post("/postgenero", async(req,res)=>{
    const {name} = req.body
    const creandogenero = await Genero.create({name})
    res.json({hello: 1234})
   
})







// router.post("/ch", (req,resp)=>{
//     Videogame.create
// })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
