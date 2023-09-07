import axios from "axios";
import { useEffect, useState } from "react";
import usePokemonList from "./usePokemonList";

function usePokemonDetails(id) {
    const [pokemon, setPokemon] = useState({});

    async function downloadPokemon() {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // console.log("Response",response);
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name)
        })

        setPokemonListState({...pokemonListState, PokedexUrl : `https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : "fire"}`})
    }
    
    const {pokemonListState, setPokemonListState} = usePokemonList(true);

    useEffect(() => {
        downloadPokemon();
    }, []);
    console.log("pokemon", pokemon);
    // console.log("list", pokemon.types,pokemonListState);

    return {pokemon, pokemonListState};
}

export default usePokemonDetails;