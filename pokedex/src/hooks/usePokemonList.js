import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList() {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        PokedexUrl: "https://pokeapi.co/api/v2/pokemon",
        nextUrl: "",
        prevUrl: "",
        // type: ""
    });

    const downloadPokemons = async () => {

        setPokemonListState((State) => ({ ...State, isLoading: true }))
        console.log("URL is", pokemonListState.PokedexUrl);
        const response = await axios.get(pokemonListState.PokedexUrl);

        const pokemonResults = response.data.results;

        console.log("Response is :", response.data.pokemon);

        setPokemonListState((State) => ({
            ...State,
            nextUrl: response.data.next,
            prevUrl: response.data.previous
        }))
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
        const pokemonData = await axios.all(pokemonResultPromise);
        // console.log("Pokemon Data is ",pokemonData);
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                name: pokemon.name,
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                types: pokemon.types,
                id: pokemon.id
            }
        });
        console.log("res is ", res);

        setPokemonListState((State) => ({
            ...State,
            pokemonList: res,
            isLoading: false
        }))
    }
    // }

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.PokedexUrl]);

    console.log(pokemonListState);
    return {
        pokemonListState,
        setPokemonListState
    }
}

export default usePokemonList;