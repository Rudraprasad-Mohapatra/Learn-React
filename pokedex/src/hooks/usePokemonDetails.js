import axios from "axios";
import { useEffect, useState } from "react";
// import usePokemonList from "./usePokemonList";

function usePokemonDetails(id) {

    const [pokemon, setPokemon] = useState({});

    // const { pokemonListState, setPokemonListState } = usePokemonList();

    async function downloadPokemon() {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

        const pokemonOfSameTypes = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`);

        console.log("Response", response);
        console.log("pokemonOfSameTypes", pokemonOfSameTypes);

        setPokemon((State) => ({
            ...State,
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            weight: response.data.weight,
            height: response.data.height,
            types: response.data.types.map((t) => t.type.name),
            similarPokemons: pokemonOfSameTypes.data.pokemon.slice(0, 5)
        }));

        // pokemonOfSameTypes.then((response)=>{
        //     setPokemon((State)=>({
        //         ...State,
        //         similarPokemons: response.data.pokemon.slice(0,5)
        //     }))
        // })

        // setPokemonListState({ ...pokemonListState, type: response.data.types ? response.data.types[0].type.name : "" })

        // console.log("Pokemon List state is ", response.data.types[0].type.name);
    }



    useEffect(() => {
        downloadPokemon();
    }, []);
    console.log("Pokemon is ", pokemon);
    // return {pokemon, pokemonListState};
    return { pokemon };
}

export default usePokemonDetails;