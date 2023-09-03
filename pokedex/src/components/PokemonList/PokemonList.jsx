import { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css"

export default function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const[isLoading, setIsLoading] = useState(true);


    const downloadPokemons = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        const pokemonResults = response.data.results;
        // console.log(pokemonResults.length);
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        console.log(pokemonData);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types
            }
        } );

        console.log(res);
        setPokemonList(res);
        setIsLoading(false);
    };
    
    useEffect(()=>{
        downloadPokemons();
    },[])


    return (
        <div className="pokemon-list-wrapper">
            Pokemon List
            <br/>
            {(isLoading) ? "Loading..." : "Data Downloaded"}
        </div>
    )
}