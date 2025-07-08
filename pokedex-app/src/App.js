// src/App.js

// Import React and the 'useState' Hook. 'useState' lets us add state to our component.
import React, { useState } from 'react';
import './App.css';
import Pokemon from './Pokemon';
import pokedexData from './pokedex.json';

function App() {
  // 'searchTerm' is the variable that holds the current value (e.g., "pika").
  // 'setSearchTerm' is the function we use to update that value.
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the list of Pokémon before we display it.
  const filteredPokemon = pokedexData.pokemon.filter(pokemon =>

    // For each Pokémon, we check if its name includes the search term.
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>My First Pokedex</h1>

      {/* This is our new search input field.
          - 'value={searchTerm}' links the input to our state, so it always displays the current search term.
          - 'onChange={handleSearchChange}' tells React to run our function every time the user types. */}
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        className="search-bar"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="pokedex-container">
        {
          // Instead of mapping over the original pokedexData, it now maps over the new 'filteredPokemon' array, so only pokemon that match the search term are displayed.
          filteredPokemon.map(pokemon => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))
        }
      </div>
    </div>
  );
}

export default App;