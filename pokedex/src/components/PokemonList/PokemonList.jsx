import { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx"
export default function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const POKEDEX_URL = "https://pokeapi.co/api/v2/pokemon/";

    const downloadPokemons = async () => {
        const response = await axios.get(POKEDEX_URL);
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
                types: pokemon.types,
                id: pokemon.id
            }
        });

        console.log(res);
        setPokemonList(res);
        setIsLoading(false);
    };

    useEffect(() => {
        downloadPokemons();
    }, [])


    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemonWrapper">
                {(isLoading) ? "Loading..." : pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}></Pokemon>
                )
                }
            </div>
            <div className="controls">
                <button>Prev</button>
                <button>Next</button>
            </div>
        </div>
    )
}