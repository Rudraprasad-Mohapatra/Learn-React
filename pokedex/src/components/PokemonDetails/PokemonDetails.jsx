import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
import usePokemonDetails from "../../hooks/usePokemonDetails";

export default function PokemonDetails({ pokemonName }) {
    const { id } = useParams();
    const { pokemon, isLoading } = usePokemonDetails(id, pokemonName);
    // console.log("I am pokemon", pokemon);
    // console.log("I am pokemonListState", pokemonListState);
    return (
        <div className="pokemon-details-wrapper">

            {isLoading && <div id="loader" className="hidden">Loading...</div>}

            <div className="pokemon-details-name">
                <span>{pokemon.name}</span>
            </div>
            <img className="pokemon-details-name pokemon-details-image"
                src={pokemon.image} />
            {!isLoading &&<div className="pokemon-details-name">
                weight: {pokemon.weight}
            </div>}
            {!isLoading &&<div className="pokemon-details-name">
                height: {pokemon.height}
            </div>}
            <div className="pokemon-details-name pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>

            {pokemon.types && pokemon.similarPokemons && <div>
                More {pokemon.types[0]} type pokemons
                <ul>
                    {
                        pokemon.similarPokemons.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)
                    }
                </ul>
            </div>}
        </div>
    )
}