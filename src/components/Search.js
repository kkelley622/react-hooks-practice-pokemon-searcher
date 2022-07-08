import React from "react";

function Search({ searchedPokemon, setSearchedPokemon}) {
  function handleSearch(event) {
    setSearchedPokemon(event.target.value)
    console.log(searchedPokemon)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchedPokemon} onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
