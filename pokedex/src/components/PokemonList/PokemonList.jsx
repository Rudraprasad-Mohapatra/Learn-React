import { useState, useEffect } from "react";
import axios from "axios";
import "./PokemonList.css"

export default function PokemonList() {
    useEffect(()=>{(async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        console.log(response.data.results);
    })(), []});



    return (
        <div className="pokemon-list-wrapper">
            Pokemon List
        </div>
    )
}