const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get("/alguna", (req,resp)=>{
resp.json({message: "hola"})

})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
