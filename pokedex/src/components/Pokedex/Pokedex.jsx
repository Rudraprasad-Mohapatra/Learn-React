import "./Pokedex.css"
import Search from "../Search/Search";
import PokemonList from "../PokemonList/PokemonList";
import { useState } from "react";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
export default function Pokedex() {

    const[searchTerm, setSearchTerm] = useState("");

    return (
        <div className="pokedex-wrapper">
            <Search updateSearchTerm = {setSearchTerm} />

            {!searchTerm ? <PokemonList />: <PokemonDetails key={searchTerm} pokemonName={searchTerm}/>}
        </div>
    )
}


