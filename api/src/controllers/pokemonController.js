const { Pokemon, Type } = require("../db");

const axios = require("axios");

async function getPokemons(req, res, next){
    try{
        let pokemons= await axios.get("https://pokeapi.co/api/v2/pokemon")
        pokemons=pokemons.data.results
        res.json(pokemons)
    } catch (error){
        next(error)
    }
}

async function dbPokemon(req, res, next){
    try{}
    catch(error){
        next(error)
    }
}

// async function getPokemonById(req, res, next){

// }

// async function getPokemonByName(req, res, next){

// }

// async function addPokemon(req, res, next){

// }



module.exports={
    getPokemons 

}