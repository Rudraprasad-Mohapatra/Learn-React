import { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx"
export default function PokemonList() {

    // const [pokemonList, setPokemonList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [PokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    // const [nextUrl, setNextUrl] = useState("");
    // const [prevUrl, setPrevUrl] = useState("");

    const [pokemonListState, setPokemonListState] = useState({
        pokemonList: [],
        isLoading: true,
        PokedexUrl: "https://pokeapi.co/api/v2/pokemon/",
        nextUrl: "",
        prevUrl: ""

    })

    const downloadPokemons = async () => {
        // setIsLoading(true);
        setPokemonListState({ ...pokemonListState, isLoading: true })
        const response = await axios.get(pokemonListState.PokedexUrl);

        const pokemonResults = response.data.results;

        console.log(response.data);
        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);
        setPokemonListState((State) => ({
            ...State,
            nextUrl: response.data.next,
            prevUrl: response.data.previous
        }))

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

        // console.log(res);
        // setPokemonList(res);
        // setIsLoading(false);
        setPokemonListState((State)=> ({
            ...State,
            pokemonList: res,
            isLoading: false
        }))

    };

    useEffect(() => {
        downloadPokemons();
    }, [pokemonListState.PokedexUrl]);


    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemonWrapper">
                {(pokemonListState.isLoading) ? "Loading..." : pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}></Pokemon>
                )
                }
            </div>
            <div className="controls">
                <button disabled={pokemonListState.prevUrl == null} onClick={() => setPokemonListState({  ...pokemonListState, PokedexUrl: pokemonListState.prevUrl })}>Prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => setPokemonListState({ ...pokemonListState, PokedexUrl: pokemonListState.nextUrl })}>Next</button>
            </div>
        </div>
    )
}