import { useEffect, useState } from "react";
import axios from "axios";

function usePokemonList(url, type) {
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        PokedexUrl: url,
        nextUrl: "",
        prevUrl: ""
    });

    const downloadPokemons = async () => {
        setPokemonListState((State) => ({ ...State, isLoading: true }))

        const response = await axios.get(pokemonListState.PokedexUrl);

        const pokemonResults = response.data.results;

        console.log("Response is :", response.data.pokemon);
        
        console.log(pokemonListState);

        setPokemonListState((State) => ({
            ...State,
            nextUrl: response.data.next,
            prevUrl: response.data.previous
        }))

        if (type) {
            setPokemonListState((state)=>({
                ...state,
                pokemonList : response.data.pokemon.slice(0,5) 
            }))
        } else {
            const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));
            const pokemonData = await axios.all(pokemonResultPromise);
            // console.log(pokemonData);
            const res = pokemonData.map((pokeData) => {
                const pokemon = pokeData.data;
                return {
                    name: pokemon.name,
                    image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    types: pokemon.types,
                    id: pokemon.id
                }
            });

            setPokemonListState((State) => ({
                ...State,
                pokemonList: res,
                isLoading: false
            }))
        }
    }
    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.PokedexUrl]);

    return {
        pokemonListState,
        setPokemonListState
    }
}

export default usePokemonList;