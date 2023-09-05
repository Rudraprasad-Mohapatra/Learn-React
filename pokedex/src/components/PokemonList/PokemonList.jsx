import "./PokemonList.css"
import Pokemon from "../Pokemon/Pokemon.jsx"
import usePokemonList from "../../hooks/usePokemonList";
export default function PokemonList() {

    // const [pokemonList, setPokemonList] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);
    // const [PokedexUrl, setPokedexUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    // const [nextUrl, setNextUrl] = useState("");
    // const [prevUrl, setPrevUrl] = useState("");
    const { pokemonListState, setPokemonListState } = usePokemonList("https://pokeapi.co/api/v2/pokemon/", false);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemonWrapper">
                {(pokemonListState.isLoading) ? "Loading..." : pokemonListState.pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id} id={p.id}></Pokemon>
                )
                }
            </div>
            <div className="controls">
                <button disabled={pokemonListState.prevUrl == null} onClick={() => setPokemonListState({  ...pokemonListState, PokedexUrl: pokemonListState.prevUrl })}>Prev</button>
                <button disabled={pokemonListState.nextUrl == null} onClick={() => setPokemonListState({ ...pokemonListState, PokedexUrl: pokemonListState.nextUrl })} style={{cursor: "pointer"}}>Next</button>
            </div>
        </div>
    )
}