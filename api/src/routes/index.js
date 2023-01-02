const { Router } = require('express');
const {Videogame, Genero} = require("../db")
const axios = require('axios')
const {
   APIKEY
  } = process.env;
const controller = require("./controllers.js")  

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const url = `https://api.rawg.io/api/games?key=${APIKEY}`
const router = Router();


router.get("/videogames", async (req,res)=>{
    try {
        const {name} = req.query
        if(!name){
            res.json(await controller.mergeAll())
        }else{
           const array = await controller.mergeAll()
           res.status(201).json(controller.withQuery(array,name))
        }   
    } catch (error) {
        res.status(404).json([])
    }   
})
router.get("/videogame/:id", async(req,res)=>{
 try {
    const {id} = req.params
   res.json(await controller.videogameID(id))
     
 } catch (error) {   
    res.status(400).json({error: error.message})
 }
})

router.post("/videogames", async (req,res)=>{
 const {name,description,released,rating,platforms, generos} = req.body
 const objeto ={name,description,released,rating,platforms, generos}
 try {
    res.json(await controller.postVideogames(objeto))    
 } catch (error) {
    res.status(400).json({error: error.message})
 }
})
router.get("/genres", async(req,res)=>{
  try {
    res.json(await controller.getGenres())
  } catch (error) {
    res.status(400).json({error: error.message})
  }

})

// router.post("/post", async(req,res)=>{
//  const {description, name, released,rating,platforms} = req.body
//  const videojuego = await Videogame.create({description,name,released,rating,platforms})
//  res.json({hello: 234})

// })
// router.get("/bypk/:id", async (req,res)=>{
//     const {id} = req.params 
//     const bypk = await Videogame.findByPk(id)
//     res.json(bypk)
// })
// router.post("/postgenero", async(req,res)=>{
//     const {name} = req.body
//     const creandogenero = await Genero.create({name})
//     res.json({hello: 1234})
   
// })







// router.post("/ch", (req,resp)=>{
//     Videogame.create
// })

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
