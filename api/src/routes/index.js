const { Router } = require("express");
const pokemonRoute = require("./pokemonRoute");
const typeRoute = require("./typeRoute");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemon", pokemonRoute);

 
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;