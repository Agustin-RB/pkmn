const { Router } = require('express');
const {getPokemons, getPokemonById, getPokemonByName, addPokemon} = require("../controllers/pokemonController.js")

const router = Router();

router.get("", getPokemons)
// router.get("/:id", getPokemonById)
// router.get("", getPokemonByName)
// router.post("/", addPokemon)


module.exports = router;