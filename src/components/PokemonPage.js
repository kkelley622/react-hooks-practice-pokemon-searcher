import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
const [pokemons, setPokemons] = useState([]);
const [searchedPokemon, setSearchedPokemon] = useState("");

useEffect(() => {
  fetch("http://localhost:3001/pokemon")
  .then((res) => res.json())
  .then((data) => setPokemons(data))
}, [])

const filteredPokemons = pokemons.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase()));

function addPokemon(newPokemon) {
  setPokemons([...pokemons, newPokemon])
}

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon}/>
      <br />
      <Search searchedPokemon={searchedPokemon} setSearchedPokemon={setSearchedPokemon}/>
      <br />
      <PokemonCollection pokemons={filteredPokemons}/>
    </Container>
  );
}

export default PokemonPage;
