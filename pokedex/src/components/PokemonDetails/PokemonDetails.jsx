import { useParams } from "react-router-dom";
import "./PokemonDetails.css"
import usePokemonDetails from "../../hooks/usePokemonDetails";

export default function PokemonDetails() {
    const { id } = useParams();
    const { pokemon, pokemonListState } = usePokemonDetails(id);
    console.log("Pokemon in details jsx is ", pokemon);
    return (
        <div className="pokemon-details-wrapper">
            <div className="pokemon-details-name">
                <span>{pokemon.name}</span>
            </div>
            <img className="pokemon-details-name pokemon-details-image"
                src={pokemon.image} />
            <div className="pokemon-details-name pokemon-details-weight">
                weight: {pokemon.weight}
            </div>
            <div className="pokemon-details-name pokemon-details-height">
                height: {pokemon.height}
            </div>
            <div className="pokemon-details-name pokemon-details-types">
                {pokemon.types && pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>

            {pokemon.types && pokemonListState.pokemonList && <div>
                More {pokemon.types[0]} type pokemons
                <ul>
                    {
                        pokemonListState.pokemonList && pokemonListState.pokemonList.map((p) => <li key={p.pokemon.url}>{p.pokemon.name}</li>)
                    }
                </ul>
            </div>}
        </div>
    )
}